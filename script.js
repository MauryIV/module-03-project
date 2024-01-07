window.alert("Let's play a game!") 

wins = 0;
loses = 0;
ties = 0;

function play() {

let userChoice = window.prompt("Rock, Paper, or Scissors?")

if ((userChoice.toLowerCase() !== "rock")
&& (userChoice.toLowerCase() !== "paper") 
&& (userChoice.toLowerCase() !== "scissors")) {
  window.alert("Please choose a valid option.")
  play()
}
else {

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

var randNumber = random(1, 3); 
var compChoice = ("")

if (randNumber === 1) {
    compChoice = "Rock";
}
else if (randNumber === 2) {
  compChoice = "Paper";
}
else if (randNumber === 3) {
  compChoice = "Scissors";
}

if (userChoice.toLowerCase() === "rock" && compChoice === "Scissors") {
  var result = true
  }
  else if (userChoice.toLowerCase() === "paper" && compChoice === "Rock") {
    var result = true
  }
  else if (userChoice.toLowerCase() === "scissors" && compChoice === "Paper") {
    var result = true
  }

if (userChoice.toLowerCase() === "rock" && compChoice === "Paper") {
    var result = false
  }
  else if (userChoice.toLowerCase() === "paper" && compChoice === "Scissors") {
    var result = false
  }
  else if (userChoice.toLowerCase() === "scissors" && compChoice === "Rock") {
    var result = false
  }

window.confirm("I chose " + compChoice + ".")


if (result === true) { 
  wins ++
  window.confirm("You win!\nWins = " + wins + ".\nLoses = " + loses + ".\nTies = " + ties + ".")
}
else if (result === false) {
  loses ++
  window.confirm("You lose...\nWins = " + wins + ".\nLoses = " + loses + ".\nTies = " + ties + ".")
}
else {
  ties ++
  window.confirm("It's a tie.\nWins = " + wins + ".\nLoses = " + loses + ".\nTies = " + ties + ".")
}

const confirm = window.confirm("Want to play again?");
  if (confirm == true) {
    play();
  } 
}
}
play();
