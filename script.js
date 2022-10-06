"use strict";

// document.querySelector(".between").textContent = "Why is it so spicyyy";

let secretNumber = Math.floor(Math.random() * 21);
let score = 20
let highscore = 0;


document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Please input a number";
  } else if (guess < secretNumber) {
    
    if (score > 1){
        document.querySelector(".message").textContent =
        "Too Low";
       score--;
       document.querySelector(".score").textContent = score
    }
    else {
        document.querySelector(".message").textContent =
        "You lost the game";
  } }
  else if (guess > secretNumber) {
    if (score > 1){
        document.querySelector(".message").textContent =
        "Too High";
       score--;
       document.querySelector(".score").textContent = score
    }
    else {
        document.querySelector(".message").textContent =
        "You lost the game";
        
    }
   
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = 
    " 🎉 Congratulation!!!!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = "30rem";
  }

  if (score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
});

document.querySelector('.again').addEventListener
    ('click', function() {
        score = 20;
        secretNumber = Math.floor(Math.random() * 21);
        document.querySelector('.message').textContent = "Start Guessing..."
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value =''
        document.querySelector('body').style.backgroundColor = "#222";
        document.querySelector('.number').style.width = "15rem";
    })