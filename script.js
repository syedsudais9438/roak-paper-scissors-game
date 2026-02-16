let userScore = 0;
let computerScore = 0;

const user_score = document.querySelector("#user-score");
const computer_score = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice)=>{
    const computerChoice = generateComputerChoice();

    if(userChoice === computerChoice){
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

const generateComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame = ()=>{
    msg.innerText = "Match Draw 🤝";
    msg.style.color = "yellow";
};

const showWinner = (userWin)=>{
    msg.classList.remove("win","lose");

    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = "You Win! 🎉";
        msg.style.color = "lime";
        msg.classList.add("win");
    } else {
        computerScore++;
        computer_score.innerText = computerScore;
        msg.innerText = "You Lose😢";
        msg.style.color = "red";
        msg.classList.add("lose");
    }
};
