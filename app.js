let humanScore = 0;
let computerScore = 0;
let finalResult;

function playRound(manChoice, machineChoice) {
    // console.log(humanChoice);
    let message;
    if (manChoice === "paper") {
        if (machineChoice === "rock") {
            message = "You win! Paper beats Rock.";
            humanScore += 1;
        } else if (machineChoice === "scissors") {
            message = "You lose! Scissors beat Paper.";
            computerScore += 1;
        } else {
            message = "Draw! Nobody wins. Try again.";
        }
    } else if (manChoice === "rock") {
        if (machineChoice === "paper") {
            message = "You lose! Paper beats Rock";
            computerScore += 1;
        } else if (machineChoice === "scissors") {
            message = "You win! Rock beats Scissors";
            humanScore += 1;
        } else {
            message = "Draw! Nobody wins. Try again.";
        }
    } else if (manChoice === "scissors") {
        if (machineChoice === "paper") {
            message = "You win! Scissors beat Paper.";
            humanScore += 1;
        } else if (machineChoice === "rock") {
            message = "You lose! Rock beats Scissors.";
            computerScore += 1;
        } else {
            message = "Draw! Nobody wins. Try again.";
        }
    }
    // console.log(message);
    return message;
}

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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        let roundResult = playRound(humanChoice, computerChoice);
        
        if (humanScore === 5) {
            console.log(humanScore);
            console.log(computerScore);
            finalResult = "You won. Congratulations!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            console.log(humanScore);
            console.log(computerScore);
            finalResult = "You lost. Better luck next time.";
            humanScore = 0;
            computerScore = 0;
        } else if (humanScore === 5 && computerScore === 5) {
            console.log(humanScore);
            console.log(computerScore);
            finalResult = "It is a draw. Play again."
            humanScore = 0;
            computerScore = 0;
        }

        console.log(roundResult);
        console.log(humanScore);
        console.log(computerScore);
        console.log(finalResult);
    });
});



