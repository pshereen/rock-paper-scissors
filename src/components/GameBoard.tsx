// components/GameBoard.tsx
import React from 'react';
import TriangleBg from '../assets/bg-triangle.svg';
import ChoiceCircle from './ChoiceCircle';
import { Choice } from '../types';

type Props = {
  onPlay: (choice: Choice) => void;
  choiceMap: Record<Choice, { icon: string; ringColor: string }>;
};

const GameBoard: React.FC<Props> = ({ onPlay, choiceMap }) => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      <img src={TriangleBg} className="absolute w-full h-full" alt="triangle" />
      <div className="absolute top-0 left-1/2 -translate-x-[150%]">
        <ChoiceCircle
          choice="paper"
          icon={choiceMap.paper.icon}
          ringColor={choiceMap.paper.ringColor}
          onClick={() => onPlay('paper')}
        />
      </div>
      <div className="absolute top-0 right-1/2 translate-x-[150%]">
        <ChoiceCircle
          choice="scissors"
          icon={choiceMap.scissors.icon}
          ringColor={choiceMap.scissors.ringColor}
          onClick={() => onPlay('scissors')}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <ChoiceCircle
          choice="rock"
          icon={choiceMap.rock.icon}
          ringColor={choiceMap.rock.ringColor}
          onClick={() => onPlay('rock')}
        />
      </div>
    </div>
  );
};

export default GameBoard;
