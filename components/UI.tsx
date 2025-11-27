import React from 'react';

// Neon Button
export const CyberButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', className = '', disabled }) => {
  const baseStyle = "font-display uppercase tracking-wider px-6 py-2 transition-all duration-300 relative overflow-hidden group border";
  
  const variants = {
    primary: "border-cyber-neonBlue text-cyber-neonBlue hover:bg-cyber-neonBlue hover:text-black shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
    secondary: "border-cyber-neonPink text-cyber-neonPink hover:bg-cyber-neonPink hover:text-black shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]",
    danger: "border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className="relative z-10 font-bold">{children}</span>
    </button>
  );
};

// Cyber Card
export const CyberCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      relative bg-cyber-dark border border-gray-800 p-6 
      ${hoverEffect ? 'hover:border-cyber-neonBlue hover:shadow-[0_0_15px_rgba(0,243,255,0.15)] transition-all duration-300' : ''}
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-cyber-neonBlue
      after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-cyber-neonBlue
      ${className}
    `}>
      {children}
    </div>
  );
};

// Glitch Text Effect Component
export const GlitchText: React.FC<{ text: string; as?: 'h1' | 'h2' | 'h3' | 'span'; className?: string }> = ({ text, as = 'span', className = '' }) => {
  const Tag = as;
  return (
    <Tag className={`relative inline-block ${className} group`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-neonPink opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-75" aria-hidden="true">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyber-neonBlue opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-75 delay-75" aria-hidden="true">{text}</span>
    </Tag>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={`bg-black/50 border border-gray-700 text-cyber-neonBlue p-3 w-full focus:outline-none focus:border-cyber-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] placeholder-gray-600 ${props.className}`}
  />
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea
    {...props}
    className={`bg-black/50 border border-gray-700 text-cyber-neonBlue p-3 w-full focus:outline-none focus:border-cyber-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] placeholder-gray-600 ${props.className}`}
  />
);