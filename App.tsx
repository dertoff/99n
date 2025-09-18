import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { UsernameInput } from './components/UsernameInput';
import { PlatformSelector } from './components/PlatformSelector';
import { DiamondSelector } from './components/DiamondSelector';
import { GenerateButton } from './components/GenerateButton';
import { GeneratingStep } from './components/GeneratingStep';
import { VerificationStep } from './components/VerificationStep';
import { ActivityFeed } from './components/ActivityFeed';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { Platform, DiamondOption } from './types';
import { DIAMOND_OPTIONS } from './constants';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [diamonds, setDiamonds] = useState<DiamondOption | null>(null);
  const [step, setStep] = useState<'initial' | 'generating' | 'verification'>('initial');

  const canGenerate = username.length > 2 && platform !== null && diamonds !== null;

  const handleGenerate = () => {
    if (canGenerate) {
      setStep('generating');
    }
  };

  useEffect(() => {
    if (diamonds === null) {
      setDiamonds(DIAMOND_OPTIONS[2] || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
        <div className="w-full max-w-2xl mx-auto bg-[#1a1333]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10">
          
          {step === 'initial' && (
            <>
              <Header />
              <div className="space-y-6 sm:space-y-8 mt-8">
                <UsernameInput username={username} setUsername={setUsername} />
                <PlatformSelector selectedPlatform={platform} onSelectPlatform={setPlatform} />
                <DiamondSelector selectedDiamonds={diamonds} onSelectDiamonds={setDiamonds} />
                <GenerateButton onClick={handleGenerate} disabled={!canGenerate} />
              </div>
            </>
          )}

          {step === 'generating' && diamonds && platform && (
             <GeneratingStep 
              username={username}
              platform={platform}
              diamonds={diamonds}
              onComplete={() => setStep('verification')}
            />
          )}

          {step === 'verification' && (
            <VerificationStep />
          )}

        </div>
        
        <ActivityFeed />
        <Footer />
      </div>
    </div>
  );
};

export default App;