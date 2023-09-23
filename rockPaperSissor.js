function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) +1);
    if (num == 1){
        return "rock";
    } else if (num == 2){
        return "paper";
    }else{
        return "scissors";
    }
}


function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
        return console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log(`you win ${playerSelection} beats ${computerSelection}`);
        return console.log(`you win ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection == "rock" && computerSelection == "rock"){
        console.log(`its a tie both choose ${playerSelection}`);
        return console.log(`its a tie both choose ${playerSelection}`);
    }
       
    if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
        return console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log(`you win ${playerSelection} beats ${computerSelection}`);
        return console.log(`you win ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log(`its a tie both choose ${playerSelection}`);
        return console.log(`its a tie both choose ${playerSelection}`);
    }


    if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
        return console.log(`you loose ${computerSelection} beats you ${playerSelection}`);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`you win ${playerSelection} beats ${computerSelection}`);
        return console.log(`you win ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection == "scissors" && computerSelection == "scissors"){
        console.log(`its a tie both choose ${playerSelection}`);
        return console.log(`its a tie both choose ${playerSelection}`);
    }

}

function game(){
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
}



console.log('testing');
playGame('rock', getComputerChoice());


