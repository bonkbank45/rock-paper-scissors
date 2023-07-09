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

function playRound(event) {

    const playerSelection = event.target.innerText;
    const computerSelection = getComputerChoice();
    let result = "";

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
        result = `Draw, ${playerSelection} equals ${computerSelection} !`;
    }
    else {
        result = `You Lose ${computerSelection} beats ${playerSelection}`;
    }

    game(result);
}

let playerScore = 0;
let computerScore = 0;

function game(playRound) {
    const WINNER = 5;
    const log = document.querySelector(".log")
    const para = document.createElement("p");

    if (playRound.match(/You Win!/)) {
       ++playerScore;
    } else {
        console.log("Loss")
    }
    /*
    if (playerScore > computerScore) {
        return `You Win! with score ${playerScore}-${computerScore}`;
    }
    else if (computerScore > playerScore) {
        return `You Lose with score ${playerScore}-${computerScore}`;
    }
    else {
        return `Withdrawn with score ${playerScore}-${computerScore}`
    }
    */
    para.innerHTML = playRound;
    log.appendChild(para);
}

const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
})
