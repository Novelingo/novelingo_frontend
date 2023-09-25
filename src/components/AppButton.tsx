import React from 'react';

// Define prop types
interface AppButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Destructure and type the props in the function parameters
export default function AppButton({
  children,
  className = "",  // Providing a default value
  onClick
}: AppButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={`bg-gradient-to-r from-pink to-purple hover:from-light hover:to-light hover:text-purple rounded-xl hover:border hover:border-dark2 text-base text-white ${className}`}>
      {children}
    </button>
  );
}
