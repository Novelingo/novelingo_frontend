import React from "react";

// Define prop types to extend all native button attributes
interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  className = "",
  ...rest // Use rest to collect all other props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the props here
      className={`bg-gradient-to-r from-pink to-purple hover:from-light hover:to-light hover:text-purple rounded-xl hover:outline hover:outline-1 hover:outline-purple text-base text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
