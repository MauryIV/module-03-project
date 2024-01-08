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

const options = ["Rock", "Paper", "Scissors"];  
const compChoice = options[Math.floor(Math.random() * options.length)];  

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
