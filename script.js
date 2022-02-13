function computerPlay () {
    const options = ["Rock", "Paper", "Scissors"];
    play = options[random()];
    return play;
}

function random() {
    n = Math.floor(Math.random()*3);
    return n;
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    switch(ps) {
        case "rock":
            if (cs == "rock") {
                return winner = "Oh! That's a tie!";
            } else if (cs == "paper") {
                return winner = "You lose, paper beats rock!";
            } else {
                return winner = "You win! Rock beats scissors!";
            }
            break;
        case "paper":
            if (cs == "rock") {
                return winner = "You win! Paper beats rock!";
            } else if (cs == "paper") {
                return winner = "Oh! That's a tie!";
            } else {
                return winner = "You lose, scissors beat paper!";
            }
            break;
            case "scissors":
            if (cs == "rock") {
                return winner = "You lose, rock beats scissors!";
            } else if (cs == "paper") {
                return winner = "You win! Scissors beat paper!";
            } else {
                return winner = "Oh! That's a tie!";
            }
            break;
    }
}

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