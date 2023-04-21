// All code should be written in this file.

//player one
let playerOneMoveOneType = ''
let playerOneMoveOneValue = 1
let playerOneMoveTwoType = ''
let playerOneMoveTwoValue = 1
let playerOneMoveThreeType = ''
let playerOneMoveThreeValue = 1

//player two
let playerTwoMoveOneType = ''
let playerTwoMoveOneValue = 1
let playerTwoMoveTwoType = ''
let playerTwoMoveTwoValue = 1
let playerTwoMoveThreeType = ''
let playerTwoMoveThreeValue = 1

//set player moves
const setPlayerMoves = function (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (player == 'Player One') {
        playerOneMoveOneType = moveOneType
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoType = moveTwoType
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeType = moveThreeType
        playerOneMoveThreeValue = moveThreeValue
    }
    //player two
    else {
        playerTwoMoveOneType = moveOneType
        playerTwoMoveOneValue = moveOneValue
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveThreeValue = moveThreeValue
    }
}

//get winner of round
const getRoundWinner = function (roundNumber) {
    if (roundNumber === 1) {
        //check strengths
        if (playerOneMoveOneType == playerTwoMoveOneType) {
            if (playerOneMoveOneValue == playerTwoMoveOneValue) {
                return 'Tie'
            }
            else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else if (playerOneMoveOneType == 'Rock') {
            if (playerTwoMoveOneType == 'Paper') {
                return 'Player Two'
            }
            else {
                return 'Player One'
            }
        }
        else if (playerOneMoveOneType == 'Paper') {
            if (playerTwoMoveOneType == 'Rock') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else {
            if (playerTwoMoveOneType == 'Paper') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
    }
    else if (roundNumber === 2) {
        if (playerOneMoveTwoType == playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue == playerTwoMoveTwoValue) {
                return 'Tie'
            }
            else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else if (playerOneMoveTwoType == 'Rock') {
            if (playerTwoMoveTwoType == 'Paper') {
                return 'Player Two'
            }
            else {
                return 'Player One'
            }
        }
        else if (playerOneMoveTwoType == 'Paper') {
            if (playerTwoMoveTwoType == 'Rock') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else {
            if (playerTwoMoveTwoType == 'Paper') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
    }
    //round 3
    else {
        if (playerOneMoveThreeType == playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue == playerTwoMoveThreeValue) {
                return 'Tie'
            }
            else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else if (playerOneMoveThreeType == 'Rock') {
            if (playerTwoMoveThreeType == 'Paper') {
                return 'Player Two'
            }
            else {
                return 'Player One'
            }
        }
        else if (playerOneMoveThreeType == 'Paper') {
            if (playerTwoMoveThreeType == 'Rock') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
        else {
            if (playerTwoMoveThreeType == 'Paper') {
                return 'Player One'
            }
            else {
                return 'Player Two'
            }
        }
    }
}

//get winner of game 
const getGameWinner = function () {
    oneWinner = getRoundWinner(1)
    twoWinner = getRoundWinner(2)
    threeWinner = getRoundWinner(3)

    //player one possible wins
    if (oneWinner == 'Player One' && twoWinner == 'Player One' && threeWinner == 'Player One') {
        return 'Player One'
    }
    else if (oneWinner == 'Player One' && twoWinner == 'Player One' && threeWinner == 'Player Two') {
        return 'Player One'
    }
    else if (oneWinner == 'Player One' && twoWinner == 'Player Two' && threeWinner == 'Player One') {
        return 'Player One'
    }
    else if (oneWinner == 'Player Two' && twoWinner == 'Player One' && threeWinner == 'Player One') {
        return 'Player One'
    }
    else if (oneWinner == 'Tie' && twoWinner == 'Player One' && threeWinner == 'Player One') {
        return 'Player One'
    }
    else if (oneWinner == 'Player One' && twoWinner == 'Tie' && threeWinner == 'Player One') {
        return 'Player One'
    }
    else if (oneWinner == 'Player One' && twoWinner == 'Player One' && threeWinner == 'Tie') {
        return 'Player One'
    }
    //player two possible wins
    else if (oneWinner == 'Player Two' && twoWinner == 'Player Two' && threeWinner == 'Player Two') {
        return 'Player Two'
    }
    else if (oneWinner == 'Player Two' && twoWinner == 'Player Two' && threeWinner == 'Player One') {
        return 'Player Two'
    }
    else if (oneWinner == 'Player Two' && twoWinner == 'Player One' && threeWinner == 'Player Two') {
        return 'Player Two'
    }
    else if (oneWinner == 'Player One' && twoWinner == 'Player Two' && threeWinner == 'Player Two') {
        return 'Player Two'
    }
    else if (oneWinner == 'Tie' && twoWinner == 'Player Two' && threeWinner == 'Player Two') {
        return 'Player Two'
    }
    else if (oneWinner == 'Player Two' && twoWinner == 'Tie' && threeWinner == 'Player Two') {
        return 'Player Two'
    }
    else if (oneWinner == 'Player Two' && twoWinner == 'Player Two' && threeWinner == 'Tie') {
        return 'Player Two'
    }
    //everything else is tie
    else {
        return 'Tie'
    }
}
const setComputerMoves = function () {
    const moveTypes = ['Rock', 'Paper', 'Scissors']
    randomMoveOneType = moveTypes[Math.floor(Math.random() * moveTypes.length)]
    randomMoveTwoType = moveTypes[Math.floor(Math.random() * moveTypes.length)]
    randomMoveThreeType = moveTypes[Math.floor(Math.random() * moveTypes.length)]

    randomMoveOneValue = Math.floor(Math.random() * (96 - 1 + 1) + 1)
    randomMoveTwoValue = Math.floor(Math.random() * (96 - 1 + 1) + 1)
    randomMoveThreeValue = Math.floor(Math.random() * (96 - 1 + 1) + 1)

    //sanity check
    if (randomMoveOneValue + randomMoveTwoValue + randomMoveThreeValue <= 99) {
        setPlayerMoves('Player Two', randomMoveOneType, randomMoveOneValue, randomMoveTwoType, randomMoveTwoValue, randomMoveThreeType, randomMoveThreeValue)

    }

}
