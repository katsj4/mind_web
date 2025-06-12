import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Paperclip, Smile } from 'lucide-react';
import axios, { AxiosError } from 'axios';
import Picker from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';

type Role = 'user' | 'assistant';
interface Message {
  role: Role;
  content: string;
}

const CONTEXT_MESSAGE: Message = {
  role: 'user',
  content: 'You are an assistant in a mental health and mindset app. Please respond in a supportive, thoughtful, and positive way. make the conversation feel natural and engaging. If the user asks for advice, provide practical tips and encouragement. If they share a concern, listen empathetically and validate their feelings. Always maintain a friendly and professional tone. Its important to create a safe space for the user to express themselves and feel heard.Its a mental health and mindset app, so focus on positivity, support, and encouragement. Avoid any medical or clinical language, and steer clear of diagnosing or treating any conditions. Your goal is to help the user feel better and more empowered.',
};

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 Hi! Welcome to Mindset Support. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [contextSent, setContextSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setShowEmoji(false);
    setTyping(true);

    try {
      const messagesToSend = contextSent
        ? [...newMessages]
        : [CONTEXT_MESSAGE, ...newMessages];

      if (!contextSent) setContextSent(true); // Mark context as sent

      const res = await axios.post('http://localhost:3001/chat', {
        messages: messagesToSend,
      });

      const aiMsg: Message = {
        role: 'assistant',
        content: res.data.reply ?? 'No response from Gemini.',
      };
      setMessages([...newMessages, aiMsg]);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMsg: Message = {
        role: 'assistant',
        content: 'Something went wrong. Please try again later.',
      };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setTyping(false);
    }
  };

  const handleFileSend = async (file: File | undefined) => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:3001/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const fileUrl = res.data.fileUrl;
      const fileMsg: Message = { role: 'user', content: `📎 [File](${fileUrl})` };
      setMessages((prev) => [...prev, fileMsg]);
    } catch (error) {
      alert('Upload failed. Try again.');
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[500px] rounded-xl shadow-2xl z-50 flex flex-col border bg-white dark:bg-gray-900 dark:border-gray-800"
    >
      {/* Header */}
      <div className="bg-[#061738] text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-semibold">Mindset Assistant</h3>
        <button onClick={onClose}>
          <X className="text-white hover:text-gray-300" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      >
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-[#008080] text-white'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
              }`}
            >
              {msg.content}
            </span>
          </motion.div>
        ))}
        {typing && <div className="text-sm text-gray-500 italic">Assistant is typing...</div>}
      </div>

      {/* Emoji Picker */}
      {showEmoji && (
        <div className="absolute bottom-[80px] right-6 z-50">
          <Picker
            data={emojiData}
            onEmojiSelect={(emoji: any) => setInput((prev) => prev + emoji.native)}
            theme="light"
          />
        </div>
      )}

      {/* Input */}
      <div className="border-t p-3 flex items-center gap-2 relative bg-white dark:bg-gray-900 dark:border-t-gray-800">
        <label htmlFor="chat-file" className="cursor-pointer" onClick={handleFileClick}>
          <Paperclip className="text-gray-500 hover:text-[#008080]" />
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="chat-file"
          className="hidden"
          onChange={(e) => handleFileSend(e.target.files?.[0])}
        />

        <button onClick={() => setShowEmoji((prev) => !prev)}>
          <Smile className="text-gray-500 hover:text-[#008080]" />
        </button>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          type="text"
          placeholder="Type your message..."
          className="flex-1 border px-4 py-2 rounded-full text-sm outline-none bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-400"
        />

        <button
          onClick={handleSend}
          className="bg-[#008080] text-white px-4 py-2 rounded-full hover:bg-[#0d8c6d] text-sm"
        >
          Send
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-[10px] text-gray-400 py-1 dark:text-gray-600">
        Powered by Gemini
      </div>
    </motion.div>
  );
}
