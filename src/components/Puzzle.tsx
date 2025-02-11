import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const PUZZLE_PIECES = [
  { id: 1, rotation: 0 },
  { id: 2, rotation: 45 },
  { id: 3, rotation: 90 },
  { id: 4, rotation: 135 },
  { id: 5, rotation: 180 },
  { id: 6, rotation: 225 },
];

interface PuzzleProps {
  onComplete: () => void;
}

const Puzzle: React.FC<PuzzleProps> = ({ onComplete }) => {
  const [pieces, setPieces] = useState(PUZZLE_PIECES);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const handlePieceClick = (id: number) => {
    setPieces(prev =>
      prev.map(piece =>
        piece.id === id
          ? { ...piece, rotation: (piece.rotation + 45) % 360 }
          : piece
      )
    );

    // Check if puzzle is complete (all pieces aligned correctly)
    const isComplete = pieces.every(piece => piece.rotation === 0);
    if (isComplete) {
      onComplete();
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2 bg-white p-8 rounded-xl shadow-xl">
        {pieces.map(piece => (
          <div
            key={piece.id}
            className="transition-transform cursor-pointer hover:scale-110"
            onClick={() => handlePieceClick(piece.id)}
          >
            <Heart
              className="w-16 h-16 text-red-500"
              style={{ transform: `rotate(${piece.rotation}deg)` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Puzzle;