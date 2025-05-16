import gameEngine from '../index.js'
import getRandomInt from '../utils.js'

const gcd = (a, b) =>
  (b === 0 ? a : gcd(b, a % b))

const generateRound = () => {
  const a = getRandomInt(100)
  const b = getRandomInt(100)
  return {
    question: `${a} ${b}`,
    answer: String(gcd(a, b)),
  }
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.'
  gameEngine(description, generateRound)
}
