import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const a = getRandomInt(1, 10);
  const b = getRandomInt(1, 10);
  const operator = operations[getRandomInt(0, operations.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));
  return [question, correctAnswer];
};

export default () => startGame(description, getRoundData);