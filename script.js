let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");
const user_Score=document.querySelector("#your-score");
const computer_Score=document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
     const randomIndex=Math.floor(Math.random()*3) ;
     return options[randomIndex];
};
const drawGAme=()=>{
    message.innerText="GAME DRAW! PLAY AGAIN ";
    message.style.backgroundColor="cadetblue";
};
const showWinner=(userWin,userChoice,ComputerChoice)=>{
    if(userWin){
        userScore++;
        user_Score.innerText=userScore;
        message.innerText=`YOU WIN! Your ${userChoice} beats ${ComputerChoice}`;
        message.style.backgroundColor="green";

    }
    else{
        computerScore++;
        computer_Score.innerText=computerScore;
        message.innerText=`YOU LOSE! Computer's ${ComputerChoice} beats your ${userChoice}`;
        message.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const ComputerChoice=genComputerChoice();
    
 if(userChoice===ComputerChoice){
        drawGAme();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=ComputerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=ComputerChoice==="rock"?true:false;
        }
        else if(userChoice==="scissor"){
            userWin=ComputerChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,ComputerChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});