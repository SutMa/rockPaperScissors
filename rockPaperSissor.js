let playerScore = 0;
let computerScore = 0;
const playerBoard = document.getElementById('playerBoard');
const computerBoard = document.getElementById('computerBoard');

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    playerBoard.textContent = `Player: ${playerScore}`;
    computerBoard.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5) {
        alert('You won!');
        resetGame();
    } else if (computerScore === 5) {
        alert('Computer won!');
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = `Player: 0`;
    computerBoard.textContent = `Computer: 0`;
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent.toLowerCase();
        const computerSelection = computerChoice();
        const winner = playRound(playerSelection, computerSelection);
        updateScore(winner);
    });
});
