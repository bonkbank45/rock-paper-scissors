function getComputerChoice() {
    const choiceComputer = Math.floor(Math.random() * 3) + 1;
    let result;
    if (choiceComputer === 1) {
        result = "Rock";
    }
    else if (choiceComputer === 2) {
        result = "Paper";
    }
    else {
        result = "Scissor";
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionChoice = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
    let result;
    if (playerSelectionChoice === "Rock" && computerSelection === "Scissor") {
        result = `You Win! ${playerSelectionChoice} beats ${computerSelection}`;
    }
    else if (playerSelectionChoice === "Scissor" && computerSelection === "Paper") {
        result = `You Win! ${playerSelectionChoice} beats ${computerSelection}`;
    }
    else if (playerSelectionChoice === "Paper" && computerSelection === "Rock") {
        result = `You Win! ${playerSelectionChoice} beats ${computerSelection}`;
    }
    else if (playerSelectionChoice === computerSelection) {
        result = `Withdrawn ${playerSelectionChoice} equals ${computerSelection} !`;
    }
    else {
        result = `You Lose ${computerSelection} beats ${playerSelectionChoice}`;
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++ ) {
        let playerChoice = prompt("Rock Paper Scissor!")
        let computerSelection = getComputerChoice();
        let result = playRound(playerChoice, computerSelection);
        if (result.match(/You Win!.+/g)) {
            console.log(result);
            playerScore++
        } else if (result.match(/You Lose.+/g)) {
            console.log(result);
            computerScore++;
        } else {
            console.log(result);
        }
    }

    if (playerScore > computerScore) {
        return `You Win! with score ${playerScore}-${computerScore}`;
    }
    else if (computerScore > playerScore) {
        return `You Lose with score ${playerScore}-${computerScore}`;
    }
    else {
        return `Withdrawn with score ${playerScore}-${computerScore}`
    }
}

// rock beats scissor
// scissor beats paper
// paper beats rock
