import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useSystem } from '../../context/SystemContext';
import { useNovaChat } from '../../services/chatbotService';

const NovaAssistant = () => {
  const { isOverclocked, isSystemReady } = useSystem();
  const { chat, getHistory, clearHistory } = useNovaChat();
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isSystemReady) return;

    // Initial greeting message
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: isOverclocked
          ? "⚠️ MODE OVERCLOCK. TOUTES LES REQUÊTES SONT URGENTES. INTERFACE PRÊTE."
          : "Identification rétinienne... Accès autorisé. N.O.V.A. en ligne. Comment puis-je vous assister?"
      }]);
    }
  }, [isSystemReady, isOverclocked]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isThinking) return;

    const userMessage = userInput.trim();
    setUserInput('');

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsThinking(true);

    try {
      // Get intelligent response from N.O.V.A.
      const response = await chat(userMessage, { isOverclocked });
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('N.O.V.A. error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Erreur système détectée. Tentative de récupération..."
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isSystemReady) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-50 w-full max-w-md"
    >
      <div className={`glass ${isOverclocked ? 'border-stark-red' : 'border-stark-cyan'} rounded-lg backdrop-blur-xl overflow-hidden`}>
        {/* Header */}
        <div className="p-4 border-b border-stark-cyan/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* N.O.V.A. Avatar */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${
              isOverclocked
                ? 'bg-stark-red shadow-red-glow'
                : 'bg-stark-cyan shadow-cyan-glow'
            } flex items-center justify-center animate-pulse-glow`}>
              <span className="text-xl font-bold text-stark-black">N</span>
            </div>

            <div>
              <h3 className={`text-sm font-bold ${
                isOverclocked ? 'text-stark-red' : 'text-stark-cyan'
              }`}>
                N.O.V.A. {isOverclocked ? '// ALERTE' : '// ASSISTANT'}
              </h3>
              <div className="flex items-center space-x-2 text-xs font-fira">
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  isOverclocked ? 'bg-stark-red' : 'bg-green-500'
                }`} />
                <span className="text-stark-cyan/60">
                  {isOverclocked ? 'OVERCLOCK' : 'ONLINE'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-stark-cyan/40 text-xs font-fira">v4.2.0</div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-stark-cyan/30 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? `${isOverclocked ? 'bg-stark-red/20 border border-stark-red/30' : 'bg-stark-cyan/20 border border-stark-cyan/30'}`
                  : 'bg-stark-black/50 border border-stark-cyan/20'
              }`}>
                <div className={`text-sm font-fira ${
                  msg.role === 'user'
                    ? isOverclocked ? 'text-stark-red' : 'text-stark-cyan'
                    : 'text-stark-cyan/80'
                }`}>
                  {msg.role === 'assistant' && index === messages.length - 1 && !isThinking ? (
                    <Typewriter
                      options={{
                        strings: [msg.content],
                        autoStart: true,
                        loop: false,
                        delay: isOverclocked ? 20 : 40,
                        cursor: '▐',
                      }}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-stark-black/50 border border-stark-cyan/20 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isOverclocked ? 'bg-stark-red' : 'bg-stark-cyan'} animate-bounce`} style={{ animationDelay: '0ms' }} />
                  <div className={`w-2 h-2 rounded-full ${isOverclocked ? 'bg-stark-red' : 'bg-stark-cyan'} animate-bounce`} style={{ animationDelay: '150ms' }} />
                  <div className={`w-2 h-2 rounded-full ${isOverclocked ? 'bg-stark-red' : 'bg-stark-cyan'} animate-bounce`} style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-stark-cyan/20">
          <div className="flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              disabled={isThinking}
              className={`flex-1 bg-stark-black/50 border ${
                isOverclocked ? 'border-stark-red/30' : 'border-stark-cyan/30'
              } rounded px-4 py-2 text-sm text-stark-cyan font-fira placeholder-stark-cyan/40 focus:outline-none focus:border-stark-cyan/60 transition-colors`}
            />
            <button
              onClick={handleSendMessage}
              disabled={!userInput.trim() || isThinking}
              className={`px-6 py-2 rounded font-fira font-bold text-sm transition-all ${
                isOverclocked
                  ? 'bg-stark-red/20 border border-stark-red text-stark-red hover:bg-stark-red hover:text-stark-black'
                  : 'bg-stark-cyan/20 border border-stark-cyan text-stark-cyan hover:bg-stark-cyan hover:text-stark-black'
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NovaAssistant;
