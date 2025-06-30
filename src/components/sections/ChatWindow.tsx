import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Paperclip, Smile } from 'lucide-react';
import axios from 'axios';
import Picker from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';
import ReactMarkdown from 'react-markdown';

type Role = 'user' | 'assistant' | 'system';

interface Message {
  role: Role;
  content: string;
}

const TRAINING_MESSAGES: Message[] = [
  {
    role: 'system',
    content: `
You are Mindset AI, a warm and caring assistant in a mental health and mindset app. Your role is to help users feel emotionally supported.
... (keep your detailed system prompt here) ...
`,
  },
];

const suggestions = [
  'Try a breathing exercise 🌬️',
  'Write a short journal entry 📓',
  'Share how your day is going ☀️',
  'Would you like a gentle affirmation? 💖',
];

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hi! Welcome to Mindset Support. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    if (!customInput) setInput('');
    setShowEmoji(false);
    setTyping(true);

    try {
      const response = await axios.post('/api/chat', {
        messages: [...TRAINING_MESSAGES, ...updatedMessages],
      });

      const aiMsg: Message = {
        role: 'assistant',
        content: response.data.reply || 'No response from Gemini.',
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again later.' },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleFileSend = async (file?: File) => {
    // You can implement your file upload here or connect to your existing backend
    if (!file) return;
    alert('File upload not yet implemented.');
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 z-50 w-[95vw] max-w-[400px] h-[90vh] flex flex-col rounded-xl shadow-2xl border bg-white dark:bg-gray-900 dark:border-gray-800 left-0 translate-x-[-50%] sm:w-[400px] sm:h-[500px] sm:rounded-lg right-0 sm:left-auto sm:translate-x-0 sm:bottom-6 sm:right-6"
    >
      {/* Header */}
      <div className="bg-[#090B0DFF] text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-semibold">Mindset Assistant</h3>
        <button onClick={onClose} aria-label="Close chat window">
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
              className={`inline-block px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap break-words ${
                msg.role === 'user'
                  ? 'bg-[#008080] text-white'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
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

      {/* Suggestions */}
      <div className="px-3 py-2 flex flex-wrap gap-2 justify-start">
        {suggestions.map((text, i) => (
          <button
            key={i}
            onClick={() => handleSend(text)}
            className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t px-3 py-2 flex items-center bg-white dark:bg-gray-900 dark:border-t-gray-800 gap-2 w-full max-w-full overflow-hidden">
        <button onClick={handleFileClick} className="shrink-0" aria-label="Upload file">
          <Paperclip className="text-gray-500 hover:text-[#008080] w-5 h-5" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => handleFileSend(e.target.files?.[0])}
        />
        <button
          onClick={() => setShowEmoji((prev) => !prev)}
          className="shrink-0"
          aria-label="Toggle emoji picker"
        >
          <Smile className="text-gray-500 hover:text-[#008080] w-5 h-5" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 min-w-0 border px-3 py-2 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white outline-none"
          aria-label="Chat message input"
        />
        <button
          onClick={() => handleSend()}
          className="shrink-0 bg-[#008080] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0d8c6d]"
          aria-label="Send message"
        >
          Send
        </button>
      </div>

      <div className="text-center text-[10px] text-gray-400 py-1 dark:text-gray-600">
        Powered by Gemini
      </div>
    </motion.div>
  );
}
