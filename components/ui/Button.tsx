import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // MedSênior Palette: 
  // Primary CTA is Lime/Green (Accent) with Dark Text for contrast
  // Secondary is Dark Green with White Text
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-[#b5e045] focus:ring-brand-accent",
    secondary: "bg-brand-dark text-white hover:bg-[#005c48] shadow-lg shadow-brand-dark/20 focus:ring-brand-dark",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark",
    ghost: "bg-transparent text-brand-dark hover:bg-brand-light"
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};