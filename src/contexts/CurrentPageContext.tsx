// src/contexts/CurrentPageContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface CurrentPageContextProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrentPageContext = createContext<CurrentPageContextProps | undefined>(undefined);

interface CurrentPageProviderProps {
  children: ReactNode;
}

export function CurrentPageProvider({ children }: CurrentPageProviderProps) {
  const [currentPage, setCurrentPage] = useState<string>('Home');

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
