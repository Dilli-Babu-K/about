import React from 'react';
import { RECOVA_CONTENT } from '../constants';

export const Footer: React.FC = () => {
  const { footer } = RECOVA_CONTENT;
  
  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-zinc-800 text-center">
      <nav className="flex flex-col space-y-4 mb-8">
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
          {footer.support}
        </a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
          {footer.privacy}
        </a>
        <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
          {footer.terms}
        </a>
      </nav>
      <p className="text-xs text-zinc-700">
        {footer.copyright}
      </p>
    </footer>
  );
};