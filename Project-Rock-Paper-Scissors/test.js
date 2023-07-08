// The initial variable declarations including the user's pre-picked input/
let computerChoice;
let userChoice = prompt("User Input:");

// The function picks a random number that will change the computerChoice variable's value
function computerPlay() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
}

// The function will pick a round winner
function userPlay(userChoice) {
  return userChoice.toLowerCase();
}

function playRound() {
  computerPlay();
  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    return `You lost! Computer chose ${computerChoice}.`;
  } else if (computerChoice === userChoice) {
    return `It's a tie! Computer chose ${computerChoice}.`;
  } else {
    return `You won! Computer chose ${computerChoice}.`;
  }
}
// The function will pick a winner of 5 rounds *not working*
function game() {
  let userWinnerCount = 0;
  let computerWinnerCount = 0;
  let ties = 0;
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    if (playRound() === `You won! Computer chose ${computerChoice}.`) {
      userWinnerCount += 1;
    } else if (playRound() === `You lost! Computer chose ${computerChoice}.`) {
      computerWinnerCount += 1;
    } else {
      ties += 1;
    }
  }
  console.log(
    `${userWinnerCount} - times the user won / ${computerWinnerCount} - times the computer won / ${ties} - Ties`
  );
}
game();
