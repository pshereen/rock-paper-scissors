// components/ScoreBoard.tsx
import React from 'react';

type Props = {
  score: number;
  timesPlayed: number;
};

const ScoreBoard: React.FC<Props> = ({ score, timesPlayed }) => {
  return (
    <div className="w-full max-w-[600px] border-2 border-gray-500 rounded-xl flex justify-between items-center p-4 mb-6 bg-slate-900 text-white">
      <div className="text-left font-bold text-2xl tracking-wide leading-tight">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className="flex gap-4 items-center">
  {/* Played Box */}
  <div className="bg-white text-slate-800 rounded-lg px-6 py-2 text-center">
    <p className="text-xs font-semibold tracking-wider text-gray-500">PLAYED</p>
    <p className="text-3xl font-bold">{timesPlayed}</p>
  </div>

  {/* Score Box */}
  <div className="bg-white text-slate-800 rounded-lg px-6 py-2 text-center">
    <p className="text-xs font-semibold tracking-wider text-gray-500">SCORE</p>
    <p className="text-3xl font-bold">{score}</p>
  </div>
</div>

    </div>
  );
};


export default ScoreBoard;
