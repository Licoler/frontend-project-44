import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getRoundData = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return [question, correctAnswer];
};

export default () => startGame(description, getRoundData);
