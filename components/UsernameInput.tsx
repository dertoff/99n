import React from 'react';
import { UserIcon } from './icons/UserIcon';

interface UsernameInputProps {
  username: string;
  setUsername: (username: string) => void;
}

export const UsernameInput: React.FC<UsernameInputProps> = ({ username, setUsername }) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs">
        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-gray-800/80 border-2 border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 shadow-inner"
        />
      </div>
    </div>
  );
};