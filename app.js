let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";     
            break;

        case 2:
            computerChoice = "paper";
            break;

        case 3:
            computerChoice = "scissors";
            break;
    
        default:
            break;
    }
    // console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Select your weapon");
    // console.log(humanChoice);
    return humanChoice;
}

function playRound(manChoice, computerChoice) {
    let humanChoice = manChoice.toLowerCase();
    // console.log(humanChoice);
    let message;

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "You win! Paper beats Rock.";
            humanScore += 10;
        } else if (computerChoice === "scissors") {
            message = "You lose! Scissors beat Paper.";
            computerScore += 10;
        } else {
            message = "Draw! Nobody wins. Try again.";
        }
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            message = "You lose! Paper beats Rock";
            computerScore += 10;
        } else if (computerChoice === "scissors") {
            message = "You win! Rock beats Scissors";
            humanScore += 10;
        } else {
            message = "Draw! Nobody wins. Try again.";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            message = "You win! Scissors beat Paper.";
            humanScore += 10;
        } else if (computerChoice === "rock") {
            message = "You lose! Rock beats Scissors.";
            computerScore += 10;
        } else {
            message = "Draw! Nobody winds. Try again.";
        }
    }

    // console.log(message);
    return message;
}

let playerChoice = getHumanChoice();
let machineChoice = getComputerChoice();

playRound(playerChoice, machineChoice);
