const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validatInput(input);
    while (check == false) {
   input = prompt(
    "Type Rock, Paper, or Scissors. Please check your spelling!"
    );
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validatInput(input);
  }
  return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validatInput(choice) {
   return choices.includes(choice);
}  



function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie'
    } else if (
        (choiceP === "rock" && "scissors") || 
        (choiceP === "paper" && "rock") || 
        (choiceP === "scissors" && "paper")
    )  {
        return 'Player';
    } else{
        return "Computer";
    }
}

game();
