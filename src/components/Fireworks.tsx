import React from 'react';

const Fireworks: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <style>{`
        .firework {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0.5rem;
          aspect-ratio: 1;
          background: radial-gradient(circle, pink 0%, transparent 100%);
          animation: explode 1s ease-out infinite;
        }
        
        .firework:nth-child(2) {
          animation-delay: 0.25s;
        }
        
        .firework:nth-child(3) {
          animation-delay: 0.5s;
        }
        
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(30);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireworks;