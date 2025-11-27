import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CyberButton, CyberCard, Input } from './UI';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'NEXUS 系统在线。准备接收前端查询指令。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAIResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <CyberCard className="w-80 md:w-96 h-[500px] mb-4 flex flex-col bg-cyber-black/90 backdrop-blur-md shadow-2xl animate-pulse-fast border-cyber-neonGreen">
          <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
            <h3 className="text-cyber-neonGreen font-display font-bold">NEXUS AI ASSISTANT</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">&times;</button>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm rounded-sm border ${
                  msg.role === 'user' 
                    ? 'border-cyber-neonPink/50 text-gray-200 bg-cyber-neonPink/10' 
                    : 'border-cyber-neonGreen/50 text-cyber-neonGreen bg-cyber-neonGreen/5'
                }`}>
                  <div className="font-mono text-xs opacity-50 mb-1">
                    {msg.role === 'user' ? '> USER_INPUT' : '> SYS_RESPONSE'}
                  </div>
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-cyber-neonGreen text-xs animate-pulse font-mono">
                > 计算中...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入查询指令..."
              className="text-sm py-2"
            />
            <CyberButton onClick={handleSend} variant="primary" className="px-3">
              RUN
            </CyberButton>
          </div>
        </CyberCard>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center border-2 
          ${isOpen ? 'border-cyber-neonGreen bg-cyber-black' : 'border-cyber-neonBlue bg-cyber-dark'}
          shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:scale-110 transition-all duration-300
        `}
      >
        <span className="text-2xl">{isOpen ? '▼' : 'AI'}</span>
      </button>
    </div>
  );
};