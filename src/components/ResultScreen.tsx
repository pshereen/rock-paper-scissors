import React from 'react';
import ChoiceCircle from './ChoiceCircle';
import { Choice } from '../types';

type Props = {
  userChoice: Choice;
  computerChoice: Choice | null;
  result: string | null;
  choiceMap: Record<Choice, { icon: string; ringColor: string }>;
  onPlayAgain: () => void;
  onResetScore: () => void;
};

const ResultScreen: React.FC<Props> = ({
  userChoice,
  computerChoice,
  result,
  choiceMap,
  onPlayAgain,
  onResetScore,
}) => {
  const userIsWinner = result === 'win';
  const houseIsWinner = result === 'lose';

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Choices */}
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {/* User */}
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm mb-6">You Picked</p>
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <ChoiceCircle
              choice={userChoice}
              icon={choiceMap[userChoice].icon}
              ringColor={choiceMap[userChoice].ringColor}
              isWinner={userIsWinner}
            />
          </div>
        </div>

        {/* House */}
        <div className="flex flex-col items-center">
          <p className="uppercase text-sm mb-6">The House Picked</p>
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            { computerChoice ? (
              <ChoiceCircle
                choice={computerChoice}
                icon={choiceMap[computerChoice].icon}
                ringColor={choiceMap[computerChoice].ringColor}
                isWinner={houseIsWinner}
              />
            ) : (
              <div className="rounded-full bg-slate-800 w-40 h-40 flex items-center justify-center text-5xl font-bold animate-pulse">
                ...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Result Message */}
      {result && (
  <div className="text-center mt-8">
    <h2 className="text-4xl font-bold mb-4">
      {result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'DRAW'}
    </h2>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={onPlayAgain}
        className="px-6 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 cursor-pointer"
      >
        PLAY AGAIN
      </button>

      <button
        onClick={onResetScore}
        className="px-6 py-2 bg-white text-red-600 font-semibold rounded-md hover:bg-red-100 cursor-pointer"
      >
        RESET SCORE
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default ResultScreen;
