#!/usr/bin/env node

import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';


const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;
  return [question, correctAnswer];
};

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    return "Correct!";
  } else {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again!`;
  }
};

startGame(gameDescription, getQuestionAndAnswer, checkAnswer);
