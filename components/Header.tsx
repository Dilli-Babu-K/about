import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white tracking-wide uppercase">
          {title}
        </h1>
        {/* Placeholder for a close or back button if needed in a real app context */}
        <div className="w-6" aria-hidden="true" />
      </div>
    </header>
  );
};