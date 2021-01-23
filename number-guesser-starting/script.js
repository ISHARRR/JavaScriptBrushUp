let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {Math.floor(Math.random()*9)}
const compareGuesses = (userGuess, computerGuess, target) => {
    var userdiff = Math.abs(userGuess, target)
    var computerdiff = Math.abs(computerGuess, target)

    alert(userGuess);

    if (userdiff===computerdiff) {
        return true;
    } else if (userdiff<computerdiff) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (str) => {
    if (str==="human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {currentRoundNumber+=1}

const alert = (guess) => {
    if (guess>10){
        console.log("Guess out of range!");
    }
}