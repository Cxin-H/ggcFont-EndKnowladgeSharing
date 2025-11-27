import React, { useState, useEffect } from 'react';
import { ViewState, Article, Comment } from './types';
import { ARTICLES, REACT_ARTICLES } from './constants';
import { CyberButton, CyberCard, GlitchText, Input, TextArea } from './components/UI';
import { AIChat } from './components/AIChat';

// --- Sub-components for pages ---

const Home: React.FC<{ onChangeView: (view: ViewState) => void }> = ({ onChangeView }) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
    <div className="space-y-4">
      <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
        <GlitchText text="CYBER" className="mr-4" as="span" />
        <span className="text-cyber-neonBlue">FRONT</span>
      </h1>
      <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto border-l-2 border-cyber-neonPink pl-4">
        连接未来的前端知识库。探索 React 生态，掌握核心架构。
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
      <CyberCard className="flex flex-col items-center space-y-4 h-64 justify-center group cursor-pointer" hoverEffect>
        <div className="text-4xl text-cyber-neonBlue group-hover:scale-110 transition-transform">📚</div>
        <h3 className="text-2xl font-bold text-white">知识库</h3>
        <p className="text-sm text-gray-400">底层原理与工程化深度解析</p>
        <CyberButton onClick={() => onChangeView(ViewState.KNOWLEDGE)}>ACCESS</CyberButton>
      </CyberCard>
      
      <CyberCard className="flex flex-col items-center space-y-4 h-64 justify-center group cursor-pointer border-cyber-neonBlue/30" hoverEffect>
        <div className="text-4xl text-[#61dafb] group-hover:rotate-180 transition-transform duration-700">⚛️</div>
        <h3 className="text-2xl font-bold text-white">React 专区</h3>
        <p className="text-sm text-gray-400">Hooks, Fiber, Server Components</p>
        <CyberButton onClick={() => onChangeView(ViewState.REACT_ZONE)} variant="primary">ENTER</CyberButton>
      </CyberCard>
      
      <CyberCard className="flex flex-col items-center space-y-4 h-64 justify-center group cursor-pointer" hoverEffect>
        <div className="text-4xl text-cyber-neonPink group-hover:animate-pulse">💬</div>
        <h3 className="text-2xl font-bold text-white">留言板</h3>
        <p className="text-sm text-gray-400">与其他漫游者交换信息</p>
        <CyberButton onClick={() => onChangeView(ViewState.GUESTBOOK)} variant="secondary">CONNECT</CyberButton>
      </CyberCard>
    </div>
  </div>
);

const ArticleList: React.FC<{ articles: Article[], title: string, color: string }> = ({ articles, title, color }) => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    <div className="flex items-center mb-12">
      <div className={`w-2 h-12 bg-${color} mr-4 shadow-[0_0_10px_currentColor]`} style={{ backgroundColor: color }}></div>
      <h2 className="text-4xl font-display font-bold uppercase">{title}</h2>
    </div>
    
    <div className="grid gap-8">
      {articles.map(article => (
        <CyberCard key={article.id} className="group">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-3">
              <div className="flex gap-2 mb-2">
                 {article.tags.map(tag => (
                   <span key={tag} className="text-xs font-mono px-2 py-1 border border-gray-700 text-gray-300 rounded bg-gray-900/50">
                     #{tag}
                   </span>
                 ))}
              </div>
              <h3 className={`text-2xl font-bold text-${color === 'cyan-400' ? 'cyber-neonBlue' : 'white'} group-hover:text-cyber-neonPink transition-colors`}>
                {article.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {article.summary}
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-800 pt-4 md:pt-0 md:pl-6">
               <div className="font-mono text-xs text-gray-500 mb-4">
                 POSTED: {article.date}
               </div>
               <CyberButton className="w-full text-xs" variant="primary">READ_PROTOCOL</CyberButton>
            </div>
          </div>
        </CyberCard>
      ))}
    </div>
  </div>
);

const Guestbook: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  // Load comments from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cyberfront_comments');
    if (saved) {
      setComments(JSON.parse(saved));
    } else {
      setComments([
        { id: 'init1', author: 'Neo', content: '这个界面真的很赛博朋克！Wake up...', timestamp: Date.now() - 100000, avatarSeed: 1 },
        { id: 'init2', author: 'DevOne', content: 'React Server Components 的文章写得不错，期待更多更新。', timestamp: Date.now(), avatarSeed: 2 }
      ]);
    }
  }, []);

  const handleSubmit = () => {
    if (!name.trim() || !content.trim()) return;
    
    const newComment: Comment = {
      id: Date.now().toString(),
      author: name,
      content: content,
      timestamp: Date.now(),
      avatarSeed: Math.floor(Math.random() * 1000)
    };
    
    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('cyberfront_comments', JSON.stringify(updated));
    setName('');
    setContent('');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-display font-bold mb-8 text-cyber-neonPink border-b border-gray-800 pb-4">
        <span className="mr-2">>>></span> SYSTEM_LOGS
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <CyberCard className="sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-white">Broadcast Message</h3>
            <div className="space-y-4">
              <Input 
                placeholder="ID / Codename" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                maxLength={20}
              />
              <TextArea 
                placeholder="Transmission Content..." 
                rows={4}
                value={content}
                onChange={e => setContent(e.target.value)}
              />
              <CyberButton onClick={handleSubmit} className="w-full" variant="secondary">
                SEND_PACKET
              </CyberButton>
            </div>
          </CyberCard>
        </div>

        <div className="md:col-span-2 space-y-6">
          {comments.map(comment => (
            <div key={comment.id} className="bg-cyber-dark/50 border-l-2 border-gray-700 p-4 hover:border-cyber-neonBlue transition-colors duration-300">
               <div className="flex items-start gap-4">
                 <img 
                   src={`https://picsum.photos/seed/${comment.avatarSeed}/50/50`} 
                   alt="Avatar" 
                   className="w-10 h-10 rounded-sm grayscale hover:grayscale-0 transition-all border border-gray-600"
                 />
                 <div className="flex-1">
                   <div className="flex justify-between items-baseline mb-1">
                     <span className="text-cyber-neonBlue font-bold font-mono text-sm">{comment.author}</span>
                     <span className="text-xs text-gray-600 font-mono">
                       {new Date(comment.timestamp).toLocaleString()}
                     </span>
                   </div>
                   <p className="text-gray-300 text-sm">{comment.content}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch(view) {
      case ViewState.HOME:
        return <Home onChangeView={setView} />;
      case ViewState.KNOWLEDGE:
        return <ArticleList articles={ARTICLES} title="Frontend Knowledge Base" color="#00f3ff" />;
      case ViewState.REACT_ZONE:
        return <ArticleList articles={REACT_ARTICLES} title="React Core Zone" color="#61dafb" />;
      case ViewState.GUESTBOOK:
        return <Guestbook />;
      default:
        return <Home onChangeView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-gray-200 font-sans selection:bg-cyber-neonPink selection:text-white overflow-x-hidden relative">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-20"></div>
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-cyber-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => setView(ViewState.HOME)}
            >
              <div className="w-8 h-8 bg-cyber-neonBlue rounded-sm mr-2 group-hover:animate-spin-slow"></div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                CYBER<span className="text-cyber-neonBlue">FRONT</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { label: 'HOME', val: ViewState.HOME },
                  { label: 'KNOWLEDGE', val: ViewState.KNOWLEDGE },
                  { label: 'REACT', val: ViewState.REACT_ZONE },
                  { label: 'LOGS', val: ViewState.GUESTBOOK }
                ].map(item => (
                  <button
                    key={item.label}
                    onClick={() => setView(item.val)}
                    className={`font-mono text-sm transition-all hover:text-cyber-neonBlue ${
                      view === item.val ? 'text-cyber-neonBlue border-b-2 border-cyber-neonBlue' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
             {/* Mobile Menu Button Placeholder - simple implementation for responsiveness */}
             <div className="md:hidden">
               <button className="text-gray-400 hover:text-white">
                 <span className="sr-only">Menu</span>
                 ☰
               </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pb-20 pt-6">
        {renderView()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-mono text-sm">
            © 2077 CyberFront System. React Powered. Gemini Enhanced.
          </p>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <AIChat />
    </div>
  );
};

export default App;