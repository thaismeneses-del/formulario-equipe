import React from 'react';
import { Send } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 shadow-md hover:shadow-lg focus:ring-gray-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {variant === 'primary' && (
        <Send className="ml-2 w-4 h-4" />
      )}
    </button>
  );
};

export default Button;
