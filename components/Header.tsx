import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex justify-center mb-4">
        <LogoIcon className="w-24 md:w-32 h-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
      </div>
       <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-cyan-500" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>
        99 Nights Diamonds
      </h1>
      <p className="mt-2 text-base text-gray-300">
        Claim your cosmic fortune. Start the process below.
      </p>
    </header>
  );
};
