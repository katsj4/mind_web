import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon,
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-teal-600 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-teal-600 hover:bg-secondary-600 text-white focus:ring-secondary-500',
    outline: 'border border-gray-300 dark:border-gray-600 bg-teal-600 hover:bg-gray-50 dark:hover:bg-dark-700 text-white hover:text-gray-700 dark:hover:text-gray-200 focus:ring-primary-500'
  };
  
  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};