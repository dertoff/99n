import React, { useState, useEffect } from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface ProgressConsoleProps {
  username: string;
  diamonds: number;
  onComplete: () => void;
}

export const ProgressConsole: React.FC<ProgressConsoleProps> = ({ username, diamonds, onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: "Establishing cosmic link...", delay: 500, progress: 10 },
    { text: "Connecting to the 99 Nights nebula...", delay: 1500, progress: 25 },
    { text: `Authenticating astral signature: [${username}]...`, delay: 1500, progress: 50 },
    { text: "Signature validated.", delay: 1000, progress: 60 },
    { text: `Channeling ${diamonds.toLocaleString()} diamonds...`, delay: 2000, progress: 90 },
    { text: "Finalizing transfer...", delay: 1500, progress: 100 },
  ];

  useEffect(() => {
    let currentStep = 0;
    
    const processNextStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setTimeout(() => {
          setLogs(prev => [...prev, step.text]);
          setProgress(step.progress);
          currentStep++;
          processNextStep();
        }, step.delay);
      } else {
        setTimeout(onComplete, 1000);
      }
    };

    processNextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500" style={{ textShadow: '0 0 8px #ec4899' }}>Generating...</h2>
      <div className="bg-black/40 rounded-lg p-4 h-64 font-mono text-left text-pink-300 text-sm overflow-y-auto border border-gray-700 shadow-inner">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center mb-1 animate-fadeIn">
            <CheckIcon className="w-4 h-4 mr-2 text-fuchsia-400 flex-shrink-0" />
            <p>{log}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-4 mt-6 border border-gray-600 overflow-hidden">
        <div
          className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-lg font-semibold">{progress}% Complete</p>
    </div>
  );
};