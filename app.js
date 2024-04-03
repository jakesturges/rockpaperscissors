let playerCounter = 0; 
let computerCounter = 0; 
let gameCounter = 0; 




function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    console.log(num);

    if (num === 2) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Tie! ${playerSelection} does not beat ${computerSelection}.`;
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                computerCounter++
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            } else {
                playerCounter++
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerCounter++
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                computerCounter++
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            } 
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                playerCounter++
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                computerCounter++
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        } else {
            return "Please write a valid option"
        }
    } 
}



function playGame(playerSelection) {
    const computerChoice = getComputerChoice();
    let result = playRound(playerSelection, computerChoice);

    let resultContainer = document.querySelector("#results");
    resultContainer.textContent = result;

    let scoreContainer = document.querySelector("#score");
    scoreContainer.textContent = `Player: ${playerCounter}  Computer: ${computerCounter}`;

    if (playerCounter === 5 || computerCounter === 5) {
        if (playerCounter > computerCounter) {
            resultContainer.textContent = "Congrats! You won the game!"
        } else if (playerCounter < computerCounter) {
            resultContainer.textContent = "Uh Oh, You Lost. Try again and go for the win!"
        } else {
            resultContainer.textContent = "It's a tie!"
        }
        playerCounter = 0;
        computerCounter = 0;
    }

}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
   playGame("rock");
});

paperBtn.addEventListener("click", () => {
    playGame("paper");
});

scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
});







