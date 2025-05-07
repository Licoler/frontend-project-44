#!/usr/bin/env node

import { getRandomNumber, getRandomOperator } from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const length = Math.max(getRandomNumber(5, 10), 5); 
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = Array.from({ length }, (_, index) => start + index * step);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex];

  if (correctAnswer === undefined) {
    console.error("Error: correctAnswer is undefined");
    process.exit(1);
  }

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer.toString()]; 
};

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.trim() === correctAnswer) {
    return "Correct!";
  } else {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again!`;
  }
};

startGame(gameDescription, getQuestionAndAnswer, checkAnswer);
