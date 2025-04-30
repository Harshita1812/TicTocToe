let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(cell, index) {
  if (gameBoard[index] === '' && !gameOver) {
    cell.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;

    if(checkWinner()){
        document.getElementById("status").textContent = `Player ${currentPlayer} Wins!`;
        gameOver = true;

    }else if (gameBoard.every(cell =>cell !== "")){
        document.getElementById("status").textContent = "It's a Draw!"
        gameOver = true;
    }else{
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("status").textContent =`Player ${currentPlayer}'s Turn`;
    }
}
}
function checkWinner() {
    const winPatterns = [[0,1,2], [3,4,5],[6,7,8], [0,3,6], [1,4,7],[2,5,8],[0,4,8], [2,4,6]
]
return winPatterns.some(pattern =>{
    const [a,b,c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
});
    
}

function resetGame() {
    gameBoard= ['','','','','','','','','']
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameOver = false
  document.getElementById('status').textContent = `Player X's Turn`;
}
