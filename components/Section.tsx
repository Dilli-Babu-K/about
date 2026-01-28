import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-zinc-400 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};