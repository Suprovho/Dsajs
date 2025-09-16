function queens(board, row) {
  if (row === board.length) {
    display(board);
    console.log("");
    return 1;
  }

  let count = 0;

  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) { // if safe then check for below all 4 ;
      board[row][col] = true;
      count += queens(board, row + 1);
      board[row][col] = false; // bt if not possible.
    }
  }
  return count;
}

function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col]) {
      return false;
    }
  }
  let maxRight = Math.min(row, board.length - col - 1);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i]) {
      return false;
    }
  }

  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i]) {
      return false;
    }
  }

  return true;
}

function display(board) {
    for (let row of board) {
        let rowString = '';
        for (let element of row) {
            if (element) {
                rowString += 'Q ';
            } else {
                rowString += 'X ';
            }
        }
        console.log(rowString);
    }
}


const n = 4; 
const board = Array.from({ length: n }, () => Array(n).fill(false));
console.log(queens(board,0));
