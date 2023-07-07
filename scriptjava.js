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
    const playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
    let result;
    if (playerSelection === "Rock" && computerSelection === "Scissor") {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        result = `Withdrawn ${playerSelection} equals ${computerSelection} !`;
    }
    else {
        result = `You Lose ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}

// rock beats scissor
// scissor beats paper
// paper beats rock
