import React from 'react';
import { User, Heart } from 'lucide-react';

const Character: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-character">
        {/* Character head */}
        <div className="relative">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-2xl font-bold text-blue-700 bg-white px-4 py-1 rounded-full shadow-lg">
            Илья
          </div>
        </div>
        
        {/* Valentine Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16">
          <div className="relative w-64 h-80 animate-card">
            {/* Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
              {/* Card Front Design */}
              <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-red-50"></div>
                
                {/* Hearts Pattern */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 gap-4 p-4">
                  {[...Array(24)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-6 h-6 text-pink-400 opacity-25 animate-float-${i % 4}`}
                    />
                  ))}
                </div>
                
                {/* Main Heart */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-24 h-24 text-red-500 animate-pulse fill-current" />
                </div>
              </div>
              
              {/* Card Border Decoration */}
              <div className="absolute inset-4 border-2 border-pink-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-character {
          animation: slideIn 1s ease-out forwards;
        }
        
        .animate-card {
          animation: giftCard 2s ease-in-out forwards;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100vw);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes giftCard {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1) translateZ(100px);
          }
        }
        
        .animate-float-0 { animation: float 3s ease-in-out infinite; }
        .animate-float-1 { animation: float 3s ease-in-out infinite 0.75s; }
        .animate-float-2 { animation: float 3s ease-in-out infinite 1.5s; }
        .animate-float-3 { animation: float 3s ease-in-out infinite 2.25s; }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Character;