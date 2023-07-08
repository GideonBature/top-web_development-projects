const options = document.querySelector('.btn');
const winner = document.querySelector('.winner');
const pString = document.querySelector('.pString');
const cString = document.querySelector('.cString');

let playerCount = 0;
let computerCount = 0;

options.addEventListener('click', (e) => {

   const playerSelection = e.target.dataset.set;
   pString.textContent = playerSelection;

    function getComputerChoice() {
    let compGuess = Math.floor(Math.random() * 3 + 1);
    if (compGuess == 1) {
      return "rock";
    } else if (compGuess == 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  const computerSelection = getComputerChoice();
  cString.textContent = computerSelection;

  
  
  playRound(playerSelection, computerSelection)
  
  updateScore();

  gameWinner();

}) 


function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    return (`You Win! ${playerSelection} beats ${computerSelection}`, playerCount++);
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`, computerCount++);
  } else {
    return `It is a Draw, you choose ${playerSelection}`;
  }
}

function updateScore() {
  document.getElementById('pp').textContent = playerCount;
  document.getElementById('cp').textContent = computerCount;
}

function gameWinner() {
  if (playerCount == 5 || computerCount == 5) {
    if (playerCount > computerCount) {
      winner.textContent = "You!";
      winner.style.color = "brown";
    } else {
      winner.textContent = "Computer!";
      winner.style.color = "brown";
    }
  }
}

