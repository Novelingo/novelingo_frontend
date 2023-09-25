import React from 'react';

interface TextProps{
  children: React.ReactNode;
  className?: string;

}
export default function TextTitle({children, className}: TextProps) {
    return (
      <h1 className={` text-4xl  md:text-5xl font-display  ${className}`}>{children}</h1>
    )
  }