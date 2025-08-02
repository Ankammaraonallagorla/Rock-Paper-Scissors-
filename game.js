let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");
const msgContainer = document.querySelector(".msg-container")

const genComputerChoice = ()=>{
    const option = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}

const drawGame =()=>{
    msg.innerText = "Draw, Play again!";
    msgContainer.style.backgroundColor = "rgb(39, 4, 72)";

}

const winner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "You Win!";
        msgContainer.style.backgroundColor = "green";
    }else {
        computerscore++;
        computerScorePara.innerText = computerscore;
        msg.innerText="You loose!";
        msgContainer.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();
    
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true ;
        if(userChoice == "rock"){
            //computer choice would only be scissos and paper
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice == "paper"){
            //computer choice would only be scissos and rock
            userWin = compChoice === "scissors" ? false : true
        }else{
            //computer choice would only be paper and rock
            userWin = compChoice === "rock" ? false : true
        }
        winner(userWin, userChoice, compChoice);

    }

    
}
choices.forEach((choice)=>{
        choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        })
    })
