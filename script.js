let userScore = 0;
let compScore = 0;
let roundCounter = 0;
const maxRounds = 5; // Adjust this value to the desired number of rounds.

// ... (your existing code)


const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const winner = document.querySelector(".winner");



const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex =  Math.floor(Math.random() * 3);
    return options[randIndex];
    //rock paper scissor

}  


const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game Draw Play Again!";
    msg.style.backgroundColor = "Black";
   
    

}


const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){
       userScore++;
       let userRes = userScorePara.innerText = userScore;
       msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "Green";

    }
    else{
        compScore++;
        let compRes = compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
    
};



const timeGame = () => {
    if (roundCounter === maxRounds) {
        if (userScore > compScore) {
            winner.innerText = "User Wins the Game!";
        } else if (userScore < compScore) {
            winner.innerText = "Computer Wins the Game!";
        } else {
            winner.innerText = "It's a Tie!";
        }

        // Optionally, you can reset scores and roundCounter for a new game
        userScore = 0;
        compScore = 0;
        roundCounter = 0;
    }
};



const playGame = (userChoice) =>{

   
    console.log("user Choice = ", userChoice);

  

    //generate Computer Choice
    const compChoice = generateCompChoice();
    console.log("comp Choice = ", compChoice);
    


    if(userChoice === compChoice)
    {
        drawGame();

    }
    else 
    {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice == "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            userWin = compChoice == "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice); // updateTable(userChoice, compChoice);
         roundCounter++; 
         timeGame();

    }
};




choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});


