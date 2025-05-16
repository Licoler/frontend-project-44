import gameEngine from '../index.js'
import getRandomInt from '../utils.js'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: return NaN
  }
}

const generateRound = () => {
  const a = getRandomInt(10)
  const b = getRandomInt(10)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInt(3)]

  return {
    question: `${a} ${operator} ${b}`,
    answer: String(calculate(a, b, operator)),
  }
}

export default () => {
  const description = 'What is the result of the expression?'
  gameEngine(description, generateRound)
}
