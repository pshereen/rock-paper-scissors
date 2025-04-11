import React, { useState } from 'react';
import { Choice, choices, getWinner } from './types';
import RockIcon from './assets/icon-rock.svg';
import PaperIcon from './assets/icon-paper.svg';
import ScissorsIcon from './assets/icon-scissors.svg';

import GameBoard from './components/GameBoard.tsx';
import ResultScreen from './components/ResultScreen.tsx';
import ScoreBoard from './components/ScoreBoard';


const choiceMap: Record<Choice, { icon: string; ringColor: string }> = {
  rock: { icon: RockIcon, ringColor: 'border-red-500' },
  paper: { icon: PaperIcon, ringColor: 'border-blue-500' },
  scissors: { icon: ScissorsIcon, ringColor: 'border-yellow-400' },
};

function App() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timesPlayed, setTimesPlayed] = useState(0);

  const handleResetScore = () => {
    setScore(0);
    setTimesPlayed(0);
  };


  const handlePlay = (choice: Choice) => {
    setUserChoice(choice);
    setResult(null);
  
    setTimeout(() => {
  const random = choices[Math.floor(Math.random() * choices.length)];
  const outcome = getWinner(choice, random);
  setComputerChoice(random);
  setResult(outcome);

  setTimesPlayed(prev => prev + 1);
  if (outcome === 'win') setScore(prev => prev + 1);
  if (outcome === 'lose') setScore(prev => Math.max(0, prev - 1));
}, 3000);

  };
  

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col items-center justify-start p-4">
      <ScoreBoard score={score} timesPlayed={timesPlayed}/>
      {!userChoice ? (
        <GameBoard onPlay={handlePlay} choiceMap={choiceMap} />
      ) : (
        <ResultScreen
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          choiceMap={choiceMap}
          onPlayAgain={resetGame}
          onResetScore={handleResetScore}
        />
      )}
    </div>
  );
  
}

export default App;
