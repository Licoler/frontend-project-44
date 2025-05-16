import gameEngine from '../index.js'
import getRandomInt from '../utils.js'

const isPrime = num => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandomInt(100) + 1
  return {
    question: String(number),
    answer: isPrime(number) ? 'yes' : 'no'
  }
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  gameEngine(description, generateRound)
}
