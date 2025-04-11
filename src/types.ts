// src/types.ts
export type Choice = 'rock' | 'paper' | 'scissors';

export const choices: Choice[] = ['rock', 'paper', 'scissors'];

export function getWinner(user: Choice, computer: Choice): 'win' | 'lose' | 'draw' {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}
