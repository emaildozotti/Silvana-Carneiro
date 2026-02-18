import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base tracking-wide active:scale-95";
  
  const variants = {
    primary: "bg-stone-800 text-stone-50 hover:bg-stone-700 shadow-md hover:shadow-lg",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-50",
    ghost: "text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};