import gameEngine from '../index.js'
import getRandomInt from '../utils.js'

const generateRound = () => {
  const start = getRandomInt(50)
  const step = getRandomInt(10) + 1
  const length = 10
  const hiddenIndex = getRandomInt(length)

  const progression = Array.from({ length }, (_, i) =>
    start + i * step)
  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  return {
    question: progression.join(' '),
    answer
  }
}

export default () => {
  const description = 'What number is missing in the progression?'
  gameEngine(description, generateRound)
}
