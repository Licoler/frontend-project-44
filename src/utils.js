export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};