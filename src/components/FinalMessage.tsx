import React from 'react';

const FinalMessage: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-between bg-black bg-opacity-50">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-5xl font-bold text-white animate-message">
          Вот тебе валентинка
        </div>
      </div>
      <div className="w-full text-center pb-8 animate-message-subtitle">
        <div className="text-lg text-gray-300">
          разработано специально для Анастасии Хорошиловой
        </div>
      </div>
      <style>{`
        .animate-message {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-message-subtitle {
          animation: slideUp 1s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FinalMessage;