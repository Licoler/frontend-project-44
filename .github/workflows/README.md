# Automatic tests

After completing all the steps in the project, automatic tests will become available to you. Tests are run on each commit - once all tasks in the Hexlet interface are completed, make a commit, and the tests will run automatically.

The hexlet-check.yml file is responsible for running these tests - do not delete this file, edit it, or rename the repository.

# Игры разума (JavaScript)

**«Игры разума»** — это набор из пяти консольных мини-игр, вдохновлённых приложениями для тренировки мозга. Каждая игра задаёт серию вопросов, и если игрок даёт три правильных ответа подряд — игра считается пройденной. Один неправильный ответ — и начинается заново.

---

## Установка

```bash
$ npm install
$ npm link

Игры

1. Проверка на чётность (brain-even)
Описание:
Показывается случайное число. Нужно ответить yes, если число чётное, и no, если нечётное.

Запуск:

node src/games/brain-even.js
Пример игры:
[![asciicast](https://asciinema.org/a/YN3RldVEDRbGF225PwONJejL3.svg)](https://asciinema.org/a/YN3RldVEDRbGF225PwONJejL3)


2. Калькулятор (brain-calc)
Описание:
Игроку показывается математическое выражение (например, 35 + 16). Нужно ввести правильный результат.

Запуск:

node src/games/brain-calc.js
Пример игры:
[![asciicast](https://asciinema.org/a/lalVhjaq4LRW5Ud2j0IKuxQOp.svg)](https://asciinema.org/a/lalVhjaq4LRW5Ud2j0IKuxQOp)


3. НОД (brain-gcd)
Описание:
Показаны два числа. Нужно ввести наибольший общий делитель (НОД) этих чисел.

Запуск:

node src/games/brain-gcd.js
Пример игры:
[![asciicast](https://asciinema.org/a/HqNZQcxNGfTHrRZRx5hCx6cWa.svg)](https://asciinema.org/a/HqNZQcxNGfTHrRZRx5hCx6cWa)


4. Арифметическая прогрессия (brain-progression)
Описание:
Показан ряд чисел с пропущенным элементом. Нужно определить недостающее число.

Запуск:
node src/games/brain-progression.js
Пример игры:
[![asciicast](https://asciinema.org/a/BaUtMOlfz9tHkpyLSvjyLmLYZ.svg)](https://asciinema.org/a/BaUtMOlfz9tHkpyLSvjyLmLYZ)


 Простое ли число? (brain-prime)
Описание:
Показано число. Нужно ответить yes, если оно простое, и no, если нет.

Запуск:
node src/games/brain-prime.js
Пример игры:
[![asciicast]( https://asciinema.org/a/oXQiMoUSLeBKJQMzF9zGvqdHr.svg)]( https://asciinema.org/a/oXQiMoUSLeBKJQMzF9zGvqdHr)
