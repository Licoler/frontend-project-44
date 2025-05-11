import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
