let hscore = document.querySelector('#humanScore');
let mscore = document.querySelector('#machine');
let win = 0;
let lose = 0;

//buttons
const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click',() => {
    playRound("rock");
    console.log(winner);
});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click',() => {
    playRound("paper");
    console.log(winner);
});

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click',() => {
    playRound("scissors");
    console.log(winner);
});


//functions
function computerPlay () {
    const options = ["Rock", "Paper", "Scissors"];
    play = options[random()];
    return play;
}

function random() {
    n = Math.floor(Math.random()*3);
    return n;
}

function playRound(ps) {
    let cs = computerPlay().toLowerCase();
    switch(ps) {
        case "rock":
            if (cs == "rock") {
                winner = "Oh! That's a tie!";
            } else if (cs == "paper") {
                winner = "You lose, paper beats rock!";
            } else {
                winner = "You win! Rock beats scissors!";
            }
            break;
        case "paper":
            if (cs == "rock") {
                winner = "You win! Paper beats rock!";
            } else if (cs == "paper") {
                winner = "Oh! That's a tie!";
            } else {
                winner = "You lose, scissors beat paper!";
            }
            break;
            case "scissors":
            if (cs == "rock") {
                winner = "You lose, rock beats scissors!";
            } else if (cs == "paper") {
                winner = "You win! Scissors beat paper!";
            } else {
                winner = "Oh! That's a tie!";
            }
            break;
    }
    if (winner.substring(0,7) == "You win") {
        ++win
        hscore.textContent = win.toString();
    } else if (winner.substring(0,8) == "You lose") {
        ++lose
        mscore.textContent = lose.toString();
    }
    if (win == 5) {
        setTimeout(() => alert("You win! Good game"),10);
        location.reload();
    } else if (lose == 5) {
        setTimeout(() => alert("I win! I'm going to take over the world!"),10);
        location.reload();
    }
}

/*
function game(playerSelection) {
    let win = 0;
    let lose = 0;
    for (i=0 ; i<5 ; i++) {
        let playerSelection = prompt("Select your play:");
        if (playerSelection == null) {
            let playerSelection = prompt("Select your play:");
        }
        playRound(playerSelection,computerPlay());
        if (winner.substring(0,7) == "You win") {
            win++
        } else if (winner.substring(0,8) == "You lose") {
            lose++
        }
        alert(winner);
    }
    if (win > lose) {
        alert("You win the game!");
    } else if (lose > win) {
        alert("Game over, you've lost the game");
    } else {
        alert("Wow! The game ended in a tie!");
    }
}
*/