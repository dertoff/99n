import React from 'react';

const Star: React.FC<{ top: string; left: string; size: string; delay: string; duration: string }> = ({ top, left, size, delay, duration }) => (
    <div
        className="absolute rounded-full bg-white/80 animate-pulse"
        style={{
            top,
            left,
            width: size,
            height: size,
            animationDelay: delay,
            animationDuration: duration,
            boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0f'
        }}
    />
);

export const Background: React.FC = () => {
    const stars = [
        { top: '10%', left: '25%', size: '2px', delay: '0s', duration: '3s' },
        { top: '20%', left: '80%', size: '1px', delay: '1s', duration: '4s' },
        { top: '50%', left: '50%', size: '3px', delay: '0.5s', duration: '2.5s' },
        { top: '90%', left: '10%', size: '1px', delay: '2s', duration: '5s' },
        { top: '5%', left: '5%', size: '2px', delay: '1.5s', duration: '3s' },
        { top: '70%', left: '90%', size: '2px', delay: '0.2s', duration: '4s' },
        { top: '30%', left: '5%', size: '1px', delay: '2.5s', duration: '3.5s' },
        { top: '85%', left: '60%', size: '3px', delay: '0.8s', duration: '2s' },
        { top: '40%', left: '30%', size: '1px', delay: '1.2s', duration: '4.5s' },
        { top: '65%', left: '75%', size: '2px', delay: '3s', duration: '3s' },
    ];

  return (
    <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => <Star key={i} {...star} />)}
    </div>
  );
};