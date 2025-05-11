#!/usr/bin/env node
import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
