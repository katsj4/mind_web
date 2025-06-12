// src/components/ChatWidget.tsx
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import ChatWindow from './ChatWindow';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('🔥 ChatWidget mounted');
  }, []);

  return (
    <>
      {open && (
        <ErrorBoundary>
          <ChatWindow onClose={() => setOpen(false)} />
        </ErrorBoundary>
      )}

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="w-16 h-16 bg-[#061738] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <MessageCircle className="text-white w-8 h-8" />
            <span className="absolute top-0 left-[-2.5rem] bg-white px-2 py-1 text-xs text-[#008080] font-bold rounded -rotate-12 shadow">
              We Are Here!
            </span>
          </button>
        )}
      </div>
    </>
  );
}
