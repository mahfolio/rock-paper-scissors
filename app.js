let humanScore = 0;
let computerScore = 0;
let finalResult;
let finalScoreUser;
let finalScoreComputer;

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
            finalScoreUser = humanScore;
            finalScoreComputer = computerScore;
            finalResult = "You won. Congratulations!";
        } else if (computerScore === 5) {
            finalScoreUser = humanScore;
            finalScoreComputer = computerScore;
            finalResult = "You lost. Better luck next time.";
        } else if (humanScore === 5 && computerScore === 5) {
            finalScoreUser = humanScore;
            finalScoreComputer = computerScore;
            finalResult = "It is a draw. Play again."
        }

        const userChoice = document.querySelector('.user-choice');
        userChoice.textContent = humanChoice;
        const compChoice = document.querySelector('.computer-choice');
        compChoice.textContent = computerChoice;
        const scoreUser = document.querySelector('.score__user');
        scoreUser.textContent = humanScore;
        const scoreComputer = document.querySelector('.score__computer');
        scoreComputer.textContent = computerScore;
        const finalUserScore = document.querySelector('.score-final__user');
        finalUserScore.textContent = finalScoreUser;
        const finalComputerScore = document.querySelector('.score-final__computer');
        finalComputerScore.textContent = finalScoreComputer;
        const resultRound = document.querySelector('.round-result');
        resultRound.textContent = roundResult;
        const resultFinal = document.querySelector('.final-result');
        resultFinal.textContent = finalResult;

        const reset = document.querySelector('.reset');
        reset.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;
            finalResult = "";
            finalScoreUser = "";
            finalScoreComputer = "";
            humanChoice = "";
            computerChoice = "";
            roundResult = "";
            userChoice.textContent = "";
            compChoice.textContent = "";
            scoreUser.textContent = "";
            scoreComputer.textContent = "";
            finalUserScore.textContent = "";
            finalComputerScore.textContent = "";
            resultRound.textContent = "";
            resultFinal.textContent = "";
        });

    });
});
