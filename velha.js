const board = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Function to handle cell clicks
const handleClick = (index) => {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].style.pointerEvents = 'none'; // Disable clicks after marking

    // Check for win or draw
    if (checkForWin() || checkForDraw()) {
      gameActive = false;
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.textContent = `vez do (${currentPlayer})`;
  }
};

// Function to check for a win
const checkForWin = () => {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      turnDisplay.textContent = `${currentPlayer} ganhou!`;
      return true;
    }
  }
  return false;
};

// Function to check for a draw
const checkForDraw = () => {
  if (gameBoard.every(cell => cell !== '')) {
    turnDisplay.textContent = "deu velha!";
    return true;
  }
  return false;
};

// Function to reset the game
const resetGame = () => {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  turnDisplay.textContent = `${currentPlayer}'s Turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.pointerEvents = 'auto'; // Re-enable clicks
  });
};






// Event Listeners
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});
resetButton.addEventListener('click', resetGame);