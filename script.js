let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// The purpose of this function is to be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);

    return humanDifference <= computerDifference;
}

// The purpose of this function is to be used to correctly increase the winner’s score after each round.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

// The purpose of this function is to be used to update the round number after each round.
const advanceRound = () => currentRoundNumber += 1;
