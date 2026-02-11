let userScore = 0;
let computerScore = 0;

let user_score=document.querySelector("#user-score");
let computer_score=document.querySelector("#computer-score");

let mesgPara=document.querySelector("#msg")

let choices = document.querySelectorAll(".choice");

    choices.forEach((choice)=>{
     //console.log(chioce)
choice.addEventListener("click", () => {
  const userChoice = choice.getAttribute("id");
  playGame(userChoice);
});

});
  const playGame = (userChoice) =>{
    console.log("user choice is :", userChoice);


    const computerChoice = generateComputerChoice();
    console.log("computerChoice is :", computerChoice)
    

  if (userChoice=== computerChoice){
    Draw();
  }
  else{
    let userwin =true;  //  by defuit user are winner
    if(userChoice==="rock"){
      if(computerChoice==="paper"){
        userwin = false;
        console.log("computer win");
      }
      else{
      userwin =true;
      console.log("user win");
    }
  }
else{
  if(userChoice === "paper"){

    if (computerChoice ==="rock"){
      userwin =true;
      console.log("user win");
    }
    else{
      userwin = false;
      console.log("computer win");
    }
}

else{
  if(userChoice ==="scissors"){

    if(computerChoice=== "rock"){
      userwin =false;
      console.log("computer win");
    }
  
    else{
      userwin =true;
      console.log ("user win");
    }
  }

}
}
showWinningMsg(userwin, userChoice, computerChoice);
  }

};
  const generateComputerChoice = () => {
    const options =["rock","paper","scissors"];
    let randomindex=Math.floor(Math.random()*3);

    return options[randomindex];
  };

  const Draw =()=>{
    console.log("match is draw");
    mesgPara.innerText ="matach draw bro!";
    mesgPara.style.color="yellow";
    mesgPara.style.backgroundcolor ="white";
  }

 const showWinningMsg = (userWin, userChoice, computerChoice) => {
  
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    mesgPara.innerText = "You win!";
    mesgPara.style.color = "green";
  } else {
    computerScore++;
    computer_score.innerText = computerScore;
    mesgPara.innerText = "You lose! Computer win";
    mesgPara.style.color = "red";
  }

};


