'use strict';

const playAgain = document.querySelector('.again');
const Guess = document.querySelector('.guess');
const messages = document.querySelector('.message');
const Numbers = document.querySelector('.number');
const Score = document.querySelector('.score');
const Body = document.querySelector('body');
const Check=document.querySelector('.check')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

const displayMessage = function (message) {
  messages.textContent = message;
};
const backgroundColor = function (color) {
  messages.style.background = color;
};

let score = 20;
let highscore = 0;

//Implementing the game logic...
Check.addEventListener('click', function () {
  const guess = Number(Guess.value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number⛔️!');
    backgroundColor('#F89880');

    messages.style.borderRadius = '10px';
    messages.style.marginLeft = '10%';

  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    Numbers.textContent = secretNumber;
    backgroundColor('green');
    Body.style.background = 'green';
    messages.style.color = 'white';
    Numbers.style.width = '25rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : 'Too Low📈');
      backgroundColor('#000000');
      messages.style.color='orange'
      score--;
      Score.textContent = score;
    } else {
      displayMessage('You lost the game💥');
      backgroundColor('red');
    Score.textContent = 0;
    }
  }
});

//Implementing the game reset...
  playAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  Score.textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  Body.style.background = '#000000';
  Numbers.textContent = '?';
  Numbers.style.width = '15rem';
  backgroundColor('#000000');
});
