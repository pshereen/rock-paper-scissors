import React from 'react';
import { Choice } from '../types';

type Props = {
  choice: Choice;
  icon: string;
  ringColor: string;
  onClick?: () => void;
  isWinner?: boolean;
};

const ChoiceCircle: React.FC<Props> = ({
  choice,
  icon,
  ringColor,
  onClick,
  isWinner = false,
}) => {
    return (
        <div
  className={`relative w-40 h-40 rounded-full flex items-center justify-center ${
    isWinner ? 'winner-ring' : ''
  } ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
  onClick={onClick}
>
          {/* Outer concentric ring */}
          {isWinner && (
    <>
      <div className="ring" />
      <div className="ring" />
      <div className="ring" />
    </>
  )}
      
          {/* Main Circle */}
          <div
            className={`rounded-full w-40 h-40 bg-white border-[18px] ${ringColor} flex items-center justify-center shadow-[inset_0_5px_6px_rgba(0,0,0,0.2),_0_8px_#1f2937]`}
          >
            <img src={icon} alt={choice} className="w-14 h-14" />
          </div>
        </div>
      );
      
};

export default ChoiceCircle;
