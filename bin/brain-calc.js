#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();

