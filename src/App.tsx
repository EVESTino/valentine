import React, { useState, useEffect } from 'react';
import { Heart, User } from 'lucide-react';
import Puzzle from './components/Puzzle';
import Fireworks from './components/Fireworks';
import Character from './components/Character';
import FinalMessage from './components/FinalMessage';

function App() {
  const [isPuzzleComplete, setIsPuzzleComplete] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isPuzzleComplete) {
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
        setShowCharacter(true);
      }, 3000);

      setTimeout(() => {
        setShowMessage(true);
      }, 6000);
    }
  }, [isPuzzleComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
      <div className="relative w-full h-screen">
        {!isPuzzleComplete && (
          <Puzzle onComplete={() => setIsPuzzleComplete(true)} />
        )}
        {showFireworks && <Fireworks />}
        {showCharacter && <Character />}
        {showMessage && <FinalMessage />}
      </div>
    </div>
  );
}

export default App;