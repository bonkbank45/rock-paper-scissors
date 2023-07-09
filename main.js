/*
    Do not scout my code, It's real shitty LOL!
    This is my first time coding a JavaScript project.
*/

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

const WINNER_SCORE = 5;
let playerScore = 0;
let computerScore = 0;

const log = document.querySelector(".log");
const score = document.querySelector(".score-currently");

function game(playRound) {
    
    const para = document.createElement("p");

    if (playRound.match(/You Win!/)) {
        score.innerHTML = `${++playerScore} - ${computerScore}`;
    } 
    else if (playRound.match(/You Lose/)){
        score.innerHTML = `${playerScore} - ${++computerScore}`;
    } 

    para.innerText = playRound;
    para.classList.add("log-list");
    log.appendChild(para);

    checkWinner();
}

const finalScoreContainer = document.querySelector(".final-score");

function checkWinner() {
    const finalScore = document.createElement("div");
    
    if (playerScore === WINNER_SCORE) {
        finalScore.innerText = `Player Win!, Score ${playerScore} - ${computerScore}`;
    }
    else if (computerScore === WINNER_SCORE) {
        finalScore.innerText = `You Lose, Score ${playerScore} - ${computerScore}`;
    }
    else {
        return;
    }
    finalScore.classList.add("final-score");
    finalScoreContainer.appendChild(finalScore);

    endState();
}

function endState() {
    for (const button of buttons) {
        button.style.display = "none";
    }
    playAgainButton.style.display = "block";
}

const loglist = document.getElementsByClassName("log-list");

function reset() {
    const score = document.getElementsByClassName("score-currently");
    playAgainButton.style.display = "none";

    for (const button of buttons) {
        button.style.display = "inline";
    }
 
    finalScoreContainer.removeChild(finalScoreContainer.firstChild);

    score[0].innerText = "##";
    playerScore = 0;
    computerScore = 0;

    // clear logs
    while (loglist.length > 0) {
        loglist[0].parentNode.removeChild(loglist[0]);
    };

}

const playAgainButton = document.getElementById("play-again");
const buttons = document.getElementsByClassName("key");

playAgainButton.addEventListener("click", reset);

for (const button of buttons) {
    button.addEventListener("click", playRound);
}


