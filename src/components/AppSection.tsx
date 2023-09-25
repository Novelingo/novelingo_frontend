import React from 'react';

interface AppSectionProps{
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;

}
export default function AppSection({className='', children, style}:AppSectionProps) {
  return (
  <section style={style} className={`md:px-20 px-5 md:py-20 py-10 ${className}`}>{children}</section>
  )
}

