import React from 'react';
import type { Platform } from '../types';
import { AndroidIcon } from './icons/AndroidIcon';
import { AppleIcon } from './icons/AppleIcon';
import { PcIcon } from './icons/PcIcon';

interface PlatformSelectorProps {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const platformConfig: { id: Platform; label: string; icon: React.ReactNode }[] = [
  { id: 'android', label: 'Android', icon: <AndroidIcon className="w-full h-full object-contain" /> },
  { id: 'ios', label: 'iOS', icon: <AppleIcon className="w-full h-full object-contain" /> },
  { id: 'pc', label: 'PC', icon: <PcIcon className="w-full h-full object-contain" /> },
];

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({ selectedPlatform, onSelectPlatform }) => {

  return (
    <div>
      <h3 className="text-center text-lg font-semibold mb-4 text-white">Select Your Platform</h3>
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
        {platformConfig.map((platform) => {
          const isSelected = selectedPlatform === platform.id;
          let baseClasses = "relative flex flex-col items-center justify-center gap-2 p-3 rounded-lg border font-semibold transition-all duration-300 cursor-pointer text-center h-24 w-28 sm:w-36";
          
          if (isSelected) {
            baseClasses += " bg-white/10 border-white/30 text-white shadow-lg";
          } else {
            baseClasses += " bg-black/20 border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20";
          }

          return (
            <div
              key={platform.id}
              onClick={() => onSelectPlatform(platform.id)}
              className={baseClasses}
            >
              <div className="w-8 h-8">{platform.icon}</div>
              <span className="text-lg font-bold">{platform.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
