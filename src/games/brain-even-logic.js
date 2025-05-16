import gameEngine from '../index.js'
import getRandomInt from '../utils.js'

const isEven = (num) =>
  num % 2 === 0

const generateRound = () => {
  const number = getRandomInt(100)
  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  }
}

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  gameEngine(description, generateRound)
}
