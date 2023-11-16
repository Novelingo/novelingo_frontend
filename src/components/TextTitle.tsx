import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
export default function TextTitle({ children, className }: TextProps) {
  return (
    <h1
      className={` text-2xl  md:text-3xl xl:text-4xl font-display  ${className}`}
    >
      {children}
    </h1>
  );
}
