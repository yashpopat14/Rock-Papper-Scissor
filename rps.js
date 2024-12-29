let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () =>{
    const options=["rock","paper","Scissor"];
    const randIdx =  Math.floor(Math.random() * 3 );
    return options[randIdx];
};

const drawGame = () => {
  
    msg.innerText = "Game was Draw. Play again";
    msg.Style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `you win . your ${userChoice} beats ${compChoice}`;
        msg.Style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `you lost ${compChoice} beats your ${userChoice}`;
        msg.Style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    console.log("user choice = " ,userChoice)
    // grnrate computer choice
    const compChoice = genComChoice();
    console.log("comp choice = " ,compChoice)

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else  if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice );
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    }); 
});