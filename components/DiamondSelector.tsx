import React from 'react';
import { DiamondOption } from '../types';
import { DiamondIcon } from './icons/DiamondIcon';
import { DIAMOND_OPTIONS } from '../constants';

interface DiamondSelectorProps {
  selectedDiamonds: DiamondOption | null;
  onSelectDiamonds: (option: DiamondOption) => void;
}

export const DiamondSelector: React.FC<DiamondSelectorProps> = ({ selectedDiamonds, onSelectDiamonds }) => {
  return (
    <div>
      <h3 className="text-center text-lg font-semibold mb-4 text-white">Choose Your Diamonds</h3>
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
        {DIAMOND_OPTIONS.map((option) => {
          const isSelected = selectedDiamonds?.amount === option.amount;

          let baseClasses = "relative flex flex-col items-center justify-center gap-1 p-3 rounded-lg border font-semibold transition-all duration-300 cursor-pointer text-center h-24 w-28 sm:w-36";
          
          if (isSelected) {
            baseClasses += " bg-white/10 border-white/30 text-white shadow-lg";
          } else {
             baseClasses += " bg-black/20 border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20";
          }

          return (
            <div
              key={option.amount}
              onClick={() => onSelectDiamonds(option)}
              className={baseClasses}
            >
              <div className="w-8 h-8"><DiamondIcon className="w-full h-full object-contain" /></div>
              <span className="text-lg sm:text-xl font-bold">{option.amount.toLocaleString()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};