import readlineSync from 'readline-sync'
import greeting from './cli.js'

export default (description, generateRound) => {
  const userName = greeting()
  console.log(description)

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
