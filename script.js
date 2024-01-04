'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no guess.
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  //When playe rwin the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

    //css for winner
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Logic to display secret Number "?" on win
    document.querySelector('.number').textContent = secretNumber;

    //logic to check highScore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is different (to refactor the code and remove maximum repeated codes)
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'To Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// logic to reset the game to start or to use Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  //css reset

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Prev code before removing the duplicates(!To understand game logic in more depth and step by step)
//When the guess is too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Lost Game';
//   }
// }

//When the guess is too low
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Lost Game';
//   }
// }
