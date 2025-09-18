import React, { useState, useEffect } from 'react';
import { DiamondIcon } from './icons/DiamondIcon';

const activities = [
  "DarkKnight12 received 3,000 diamonds",
  "LunaStar just generated 7,000 diamonds",
  "ProPlayer_99 added 3,000 diamonds",
  "GamerX1 received 7,000 diamonds",
  "Shadow_YT just generated 1,000 diamonds",
  "EpicGamer22 added 1,000 diamonds",
];

export const ActivityFeed: React.FC = () => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => setIsVisible(true), 2000);

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
                setIsVisible(true);
            }, 500); // fade out duration
        }, 5000); // 4.5s visible + 0.5s fade

        return () => {
            clearTimeout(showTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`fixed bottom-4 left-4 bg-gray-900/50 backdrop-blur-md p-4 rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-800/20 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="flex items-center text-white text-sm">
              <DiamondIcon className="w-5 h-5 mr-2" />
              <span>{activities[currentActivityIndex]}</span>
            </div>
        </div>
    );
};
