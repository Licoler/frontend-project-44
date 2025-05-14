import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => (
  Array.from({ length }, (_, i) => start + i * step)
);

const getRoundData = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const length = 10;
  const hiddenIndex = getRandomInt(0, length - 1);
  const progression = getProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(description, getRoundData);