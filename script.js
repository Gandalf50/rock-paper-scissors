let hscore = document.querySelector('#humanScore');
let mscore = document.querySelector('#machine');
let restart = document.querySelector('.footer')
let win = 0;
let lose = 0;
let endMessage = document.createElement('h2');

//buttons
const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click',() => {
    playRound("rock");
});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click',() => {
    playRound("paper");
});

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click',() => {
    playRound("scissors");
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
    if (win < 5 && lose < 5){
        if (ps == "rock" && cs == "scissors" || ps == "paper" && cs == "rock" || ps == "scissors" && cs == "paper") /*all winning cases*/ {
            win++;
            hscore.textContent = win.toString();
        } else if (ps == rock && cs == "paper" || ps == "paper" && cs == "scissors" || ps == "scissors" && cs == "rock") /*all losing cases*/ {
            lose++;
            mscore.textContent = lose.toString();
        }
        if (win == 5) {
            endMessage.textContent = "You win! Congratulations!";
        } else if (lose == 5) {
            endMessage.textContent = "You lose! I'm going to take over the world!";
        }
        if (win == 5 || lose == 5) {
            restart.appendChild(endMessage);
            const newGameBtn = document.createElement('button');
            newGameBtn.textContent = "Play again?";
            newGameBtn.classList.add('newGame');
            restart.appendChild(newGameBtn);
            newGameBtn.addEventListener('click',() => {
                location.reload();
            })
        } else {
            return;
        }
    }
}