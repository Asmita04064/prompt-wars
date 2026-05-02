import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import { ai } from '../../lib/gemini';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'news-verify';
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Hello! I am **VoteSmart AI**. How can I help you understand the election process today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are VoteSmart AI, a helpful election expert. Answer questions about voter registration, voting procedures, and candidate categories. Keep it neutral and informative.",
        }
      });

      const response = await chat.sendMessage({ message: input });
      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response.text || "I couldn't process that." };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: 'err', role: 'assistant', content: 'Connection error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
      <div className="bg-gray-900 text-white p-4 flex items-center gap-3">
        <div className="bg-blue-500 p-2 rounded-lg">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-sm">VoteSmart AI Assistant</h3>
          <p className="text-xs text-gray-400">Online & Ready to Help</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                msg.role === 'user' ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
              )}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                msg.role === 'user' ? "bg-blue-600 text-white rounded-tr-none" : "bg-white border border-gray-100 rounded-tl-none text-gray-800"
              )}>
                <Markdown>{msg.content}</Markdown>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center animate-pulse">
                <Bot size={16} className="text-gray-400" />
             </div>
             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
               <Loader2 size={16} className="animate-spin text-blue-600" />
             </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about voting registration, EVMs, or candidates..."
            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg shadow-blue-600/20"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
