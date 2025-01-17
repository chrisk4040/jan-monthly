let computerScore = 0;
let userScore = 0;

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput;
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
            computerScore++;
            return 'Computer won.';
        } else {
            userScore++;
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'Computer won.';
        } else {
            userScore++;
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Computer won.';
        } else {
            userScore++;
            return 'You won!';
        }
    }

    if (userChoice === 'bomb') {
        userScore++;
        return 'You won!';
    }
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`Computer chose: ${computerChoice}.`);

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);

    if (userScore === 3) {
        console.log('You are the overall winner!');
        resetGame();
    } else if (computerScore === 3) {
        console.log('Computer is the overall winner!');
        resetGame();
    }
};

const resetGame = () => {
    computerScore = 0;
    userScore = 0;
    console.log('The game has been reset.');
};
