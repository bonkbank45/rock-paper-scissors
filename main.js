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

const WINNER = 5;
let playerScore = 0;
let computerScore = 0;

function game(playRound) {
    const log = document.querySelector(".log")
    const para = document.createElement("p");
    const score = document.querySelector(".score-currently")

    if (playRound.match(/You Win!/)) {
        score.textContent = `${++playerScore} - ${computerScore}`;
    } 
    else {
        score.textContent = `${playerScore} - ${++computerScore}`;
    }

    para.innerHTML = playRound;
    log.appendChild(para);
    checkWinner();
}

function checkWinner() {
    const result = document.createElement("div");
    const endState = document.querySelector(".end-state");
    if (playerScore === WINNER) {
        result.innerText = `Player Win!, Score ${playerScore} - ${computerScore}`;
    }
    else if (computerScore === WINNER) {
        result.innerText = `You Lose, Score ${playerScore} - ${computerScore}`;
    }
    else {
        return;
    }
    endState.appendChild(result);
}

const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach( (button) => {
    button.addEventListener("click", playRound)
})
