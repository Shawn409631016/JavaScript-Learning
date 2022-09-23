const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please enter rock, paper, or scissors');
    }
}
const getComputerChoice = () => {
    number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissors';
            break;
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game was a tie.';
    }
    switch (userChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                return 'The computer won.';
            } else {
                return 'You won!';
            }
            break;
        case 'paper':
            if (computerChoice === 'scissors') {
                return 'The computer won.';
            } else {
                return 'You won!';
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                return 'The computer won.';
            } else {
                return 'You won!';
            }
            break;
    }
}
const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You: ' + userChoice);
    console.log('computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();