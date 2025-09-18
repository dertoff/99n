import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

declare const _FD: (() => void) | undefined;

export const VerificationStep: React.FC = () => {
  const handleVerifyClick = () => {
    if (typeof _FD === 'function') {
      _FD();
    } else {
      console.error('Content locker function not found.');
    }
  };

  return (
    <div className="text-center animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4 text-green-400" style={{ textShadow: '0 0 8px #34d399' }}>
        Verification Required
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
        Our systems require a brief human verification to secure your account and prevent fraudulent activity. This is a one-time check.
      </p>
      <button
        onClick={handleVerifyClick}
        className="inline-flex items-center justify-center text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg shadow-green-500/50 hover:from-green-600 hover:to-teal-600 focus:ring-green-400 btn-pulse"
        style={{ animationDuration: '2.5s' }}
      >
        Verify Now
        <ShieldCheckIcon className="w-6 h-6 ml-3" />
      </button>
    </div>
  );
};
