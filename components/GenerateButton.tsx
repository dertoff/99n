import React from 'react';
import { RocketIcon } from './icons/RocketIcon';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, disabled }) => {
  const baseClasses = "w-full flex items-center justify-center text-xl font-bold py-4 px-6 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4";
  const enabledClasses = "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50 hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-400 btn-pulse";
  const disabledClasses = "bg-gray-700 text-gray-500 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
    >
      Unleash Diamonds
      <RocketIcon className="w-6 h-6 ml-3" />
    </button>
  );
};