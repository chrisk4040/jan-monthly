let computerScore= 0;
let userScore = 0;

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    }


const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer won.';
          } else {
            return 'You won!';
          }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won.';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won.';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'bomb') {
        return 'You won!';
    }
  };
  
    const playGame = (userChoice) => {
      const computerChoice = getComputerChoice();
      console.log(`You chose: ${userChoice}.`);
      console.log(`Computer chose: ${computerChoice}.`);
     
      console.log(determineWinner(userChoice, computerChoice))
  };
  

  if computerWon(){
    return `1 + ${computerScore}`
  }; else if userWon(){
    return `1 + ${userScore}`
  }



switch (computerScore){
    case 0:
    return 
}