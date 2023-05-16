let playerNumber = 1;
let gameFinished = false;
let GRID_SIZE = 0; // default to 0, but should be set to whatever the input is.

function _init_please_dont_do_this_it_is_bad() {
    document.querySelector('.play-again').hidden = true;
}

function onStartGameClicked() {
    // remove all children of game container
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = '';

    // add NxN grids
    const nInputValue = document.querySelector('#n-input').value;
    const nValue = parseInt(nInputValue);
    if (!validateEnteredNumber(nValue)) {
        return; // invalid number entered, we should not continue
    }

    GRID_SIZE = nValue;
    for (let index = 0; index < GRID_SIZE * GRID_SIZE; index++) {
        // <div class="cell" onclick="onCellClicked(event)"></div>
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.onclick = (event) => onCellClicked(event, index);

        gameContainer.appendChild(newCell);
    }

    // set the CSS variable to N so CSS knows how many rows/cols to draw
    const root = document.documentElement;
    root.style.setProperty('--grid-size', GRID_SIZE);

    // make the container bc we defaulted it not to be hidden to prevent it from taking height
    gameContainer.classList.remove('default-hidden');

    // this does what I want to reset the game state
    onPlayAgainClicked();
}

function validateEnteredNumber(maybeNumber) {
    if (typeof maybeNumber !== 'number' || isNaN(maybeNumber)) {
        alert('Enter a valid number!')
        return false;
    }

    if (maybeNumber <= 1) {
        alert('Number was too small.');
        return false; 
    }

    return true;
}

function onPlayAgainClicked() {
    document.querySelector('.play-again').hidden = true;
    document.querySelector('.game-status').textContent = `Player 1's (X) turn.`
    gameFinished = false;

    const cells = document.querySelectorAll(".cell");
    for (const cell of cells) {
        cell.textContent = '';
    }
}

function onCellClicked(event, index) {
    const cell = event.target;
    
    // box already has letter or game is finished
    if (cell.textContent || gameFinished) {
        return;
    }

    cell.textContent = getLetterToPlace();

    const winningPlayer = checkWin(index);
    if (winningPlayer !== 0) {
        document.querySelector('.game-status').textContent = `Player ${winningPlayer} (${getLetterToPlace()}) has won!`
        document.querySelector('.play-again').hidden = false;
        gameFinished = true;
        return;
    }

    if (checkDraw()) {
        document.querySelector('.game-status').textContent = `It's a draw!`
        document.querySelector('.play-again').hidden = false;
        gameFinished = true;
        return;
    }

    // swap player
    playerNumber = playerNumber === 1 ? 2 : 1;
    document.querySelector('.game-status').textContent = `Player ${playerNumber}'s (${getLetterToPlace()}) turn.`
}

function getLetterToPlace() {
    return playerNumber === 1 ? 'X' : 'O';
}

function checkWin(index) {
    // inner helper function
    function hasWinForLetter(letter) {
        const indexToRow = Math.floor(index / GRID_SIZE);
        const indexToColumn = index % GRID_SIZE;
        return checkRow(indexToRow, letter) || checkColumn(indexToColumn, letter) || checkDiagonal(index, letter);
    }

    if (hasWinForLetter('X')) {
        return 1;   // Player 1 win
    }
    else if (hasWinForLetter('O')) {
        return 2;   // Player 2 win
    }
    
    return 0;       // No players won
}

function checkRow(rowIndex, letter) {
    const cells = document.querySelectorAll(".cell");

    // could probably use an every(...) here with
    // [...Array(GRID_SIZE).keys().map(i => i + (rowIndex * GRID_SIZE)).every((indexForRow) => cells[indexForRow] === letter);
    for (let i = 0; i < GRID_SIZE; i++) {
        const indexForRow = i + (rowIndex * GRID_SIZE);
        if (cells[indexForRow].textContent !== letter) {
            return false;
        }
    }
    return true;
}

function checkColumn(colIndex, letter) {
    const cells = document.querySelectorAll(".cell");

    // could probably use an every(...) here with
    // [...Array(GRID_SIZE).keys()].map(i => colIndex + (i * GRID_SIZE)).every((indexForCol) => cells[indexForCol] === letter);
    for (let i = 0; i < GRID_SIZE; i++) {
        const indexForCol = colIndex + (i * GRID_SIZE);
        if (cells[indexForCol].textContent !== letter) {
            return false;
        }
    }
    return true;
}

function checkDiagonal(index, letter) {
    const cells = document.querySelectorAll(".cell");

    // calculate (top left to bottom right) diagonal indices (e.g. for 3x3 grid, we should return[0,4,8])
    // explanation: [0,1,2] => [0 * (3+1), 1 * (3+1), 2 * (3+1)] => [0*4, 1*4, 2*4] => [0,4,8]
    const topLeftDiagonalIndices = [...Array(GRID_SIZE).keys()].map((index) => (index * (GRID_SIZE + 1)));

    // calculate (top right to bottom left) diagonal indices (e.g. for 3x3 grid, we should return [2,4,6])
    // explanation: [0,1,2] => [(0+1) * 2, (1+1) * 2, (2+1) * 2] => [1*2, 2*2, 3*2] => [2,4,6]
    const topRightDiagonalIndices = [...Array(GRID_SIZE).keys()].map((index) => (index + 1) * (GRID_SIZE - 1));

    // check if the index is even on a diagonal
    // and if it is, check if there is a win on it
    if (topLeftDiagonalIndices.includes(index)) {
        return topLeftDiagonalIndices.every((tlIndex) => cells[tlIndex].textContent === letter);
    }
    if (topRightDiagonalIndices.includes(index)) {
        return topRightDiagonalIndices.every((trIndex) => cells[trIndex].textContent === letter);
    }

    return false;
}

function checkDraw() {
    const cells = document.querySelectorAll(".cell");
    // or Array.from(cells).every(...)
    return [...cells].every(cell => !!cell.textContent);
}

_init_please_dont_do_this_it_is_bad();
