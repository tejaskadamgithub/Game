let userScore = 0;
let compScore = 0;
let clickCounter = 0;
const maxClicks = 5; // Adjust this value to the desired number of clicks.

// const resetTable = () => {
//     const table = document.querySelector('table');
//     // Remove all rows from the table except the header row (first row).
//     for (let i = table.rows.length - 1; i > 0; i--) {
//         table.deleteRow(i);
//     }
// };

// const resetTableAndCounter = () => {
//     resetTable();
//     clickCounter = 0;
// };





const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const winner = document.querySelector(".win");

// const user_selector = document.querySelector(".user_selector");
// const comp_selector = document.querySelector(".comp_selector");



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
       userScorePara.innerText = userScore;
       msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "Green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
    
};

// const updateTable = (userChoice, compChoice) => {
//     const table = document.querySelector('table');
//     const newRow = table.insertRow(1);

    

//     const userCell = newRow.insertCell(0);
//     const compCell = newRow.insertCell(1);

//     userCell.textContent = userChoice;
//     compCell.textContent = compChoice;

//     clickCounter++;

//     if (clickCounter === maxClicks) {
//         resetTableAndCounter(); // Reset the table and counter after the specified number of clicks.
//     }
// };



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
        showWinner(userWin, userChoice, compChoice);
        // updateTable(userChoice, compChoice);
        

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});


