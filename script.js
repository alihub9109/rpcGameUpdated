// Get references to DOM elements
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Scores
let playerScore = 0;
let computerScore = 0;

// Generate a random computer choice
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Check if the player won the round
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// Handle results of a single round
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return "Player wins! " + userOption + " beats " + computerResult;
  } else if (computerResult === userOption) {
    return "It's a tie! Both chose " + userOption;
  } else {
    computerScore++;
    return "Computer wins! " + computerResult + " beats " + userOption;
  }
}

// Show the result of clicking a button
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    if (playerScore === 3) {
      winnerMsgElement.innerText = "Player has won the game!";
    } else {
      winnerMsgElement.innerText = "Computer has won the game!";
    }

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// Reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

// Event listeners for buttons
document.getElementById("rock-btn").addEventListener("click", function () {
  showResults("Rock");
});

document.getElementById("paper-btn").addEventListener("click", function () {
  showResults("Paper");
});

document.getElementById("scissors-btn").addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
