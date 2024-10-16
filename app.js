function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";     
            break;

        case 2:
            computerChoice = "Paper";
            break;

        case 3:
            computerChoice = "Scissors";
            break;
    
        default:
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Select your weapon");
    
    return humanChoice;
}

