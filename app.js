
function getComputerChoice() {
    let computerChoice;
    choices = ["rock", "paper", "scissors"];
    // Number 3 for generating a random number between 1 and 3
    // Number 1 for starting the random number from 1 instead of 0
    // let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerChoice = choices[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);
    return computerChoice;
}
// Change the following function to getHumanChoice interactively using buttons
function getHumanChoice() {
    let humanChoice = "";
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            humanChoice = button.id;
        });
    });
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let finalResult;

    function playRound(manChoice, computerChoice) {
        let humanChoice = manChoice.toLowerCase();
        // console.log(humanChoice);
        let message;
    
        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                message = "You win! Paper beats Rock.";
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                message = "You lose! Scissors beat Paper.";
                computerScore += 1;
            } else {
                message = "Draw! Nobody wins. Try again.";
            }
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                message = "You lose! Paper beats Rock";
                computerScore += 1;
            } else if (computerChoice === "scissors") {
                message = "You win! Rock beats Scissors";
                humanScore += 1;
            } else {
                message = "Draw! Nobody wins. Try again.";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                message = "You win! Scissors beat Paper.";
                humanScore += 1;
            } else if (computerChoice === "rock") {
                message = "You lose! Rock beats Scissors.";
                computerScore += 1;
            } else {
                message = "Draw! Nobody winds. Try again.";
            }
        }
        // console.log(message);
        return message;
    }

    let playerChoice = getHumanChoice();
    let machineChoice = getComputerChoice();
    console.log(playRound(playerChoice, machineChoice));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    

    if (humanScore > computerScore) {
        finalResult = "You won. Congratulations!";
    } else if (humanScore < computerScore) {
        finalResult = "You lost. Better luck next time.";
    } else {
        finalResult = "It is a draw. Play again."
    }

    console.log(finalResult);
}

playGame();


