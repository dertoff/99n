import React, { useState, useEffect } from 'react';
import { Platform, DiamondOption } from '../types';
import { UserIcon } from './icons/UserIcon';
import { DiamondIcon } from './icons/DiamondIcon';
import { PcIcon } from './icons/PcIcon';
import { AndroidIcon } from './icons/AndroidIcon';
import { AppleIcon } from './icons/AppleIcon';


interface GeneratingStepProps {
  username: string;
  platform: Platform;
  diamonds: DiamondOption;
  onComplete: () => void;
}

const platformIcons: Record<Platform, React.ReactNode> = {
  android: <AndroidIcon className="w-full h-full object-contain" />,
  ios: <AppleIcon className="w-full h-full object-contain" />,
  pc: <PcIcon className="w-full h-full object-contain" />,
};

export const GeneratingStep: React.FC<GeneratingStepProps> = ({ username, platform, diamonds, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing cosmic link...");

  const statuses = [
    { text: "Connecting to 99 Nights nebula...", progress: 25, delay: 1000 },
    { text: `Authenticating astral signature: [${username}]...`, progress: 50, delay: 1500 },
    { text: "Signature validated.", progress: 75, delay: 1000 },
    { text: `Channeling ${diamonds.amount.toLocaleString()} diamonds...`, progress: 100, delay: 1500 },
  ];

  useEffect(() => {
    let currentStep = 0;
    
    const processNextStatus = () => {
      if (currentStep < statuses.length) {
        const step = statuses[currentStep];
        setTimeout(() => {
          setStatus(step.text);
          setProgress(step.progress);
          currentStep++;
          processNextStatus();
        }, step.delay);
      } else {
        setTimeout(onComplete, 1000);
      }
    };

    const initialTimeout = setTimeout(() => {
        setProgress(10);
        processNextStatus();
    }, 500);

    return () => clearTimeout(initialTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" style={{ textShadow: '0 0 8px #22d3ee' }}>
        Generating Your Fortune
      </h2>
      
      <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-gray-700 space-y-4">
        <div className="flex justify-between items-center text-lg">
          <span className="flex items-center text-gray-300"><UserIcon className="w-5 h-5 mr-3 text-cyan-400"/>Username:</span>
          <span className="font-bold text-white">{username}</span>
        </div>
         <div className="flex justify-between items-center text-lg">
          <span className="flex items-center text-gray-300"><div className="w-5 h-5 mr-3">{platformIcons[platform]}</div>Platform:</span>
          <span className="font-bold text-white capitalize">{platform}</span>
        </div>
         <div className="flex justify-between items-center text-lg">
          <span className="flex items-center text-gray-300"><DiamondIcon className="w-5 h-5 mr-3"/>Amount:</span>
          <span className="font-bold text-white">{diamonds.amount.toLocaleString()} Diamonds</span>
        </div>
      </div>

      <div className="w-full bg-gray-700/50 rounded-full h-4 mb-2 border border-gray-600 overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-lg font-semibold mb-2 text-white">{progress}% Complete</p>
      <div className="h-6 flex items-center justify-center">
        <p className="text-gray-300">
          {status}
        </p>
      </div>
    </div>
  );
};
