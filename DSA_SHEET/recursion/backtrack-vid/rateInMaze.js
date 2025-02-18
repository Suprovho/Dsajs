function ratInMaze(board, p, r, c, list) {
  if (r == board.length - 1 && c == board[0].length - 1) {
    list.push(p);
    return;
  }
  if (!board[r][c]) {
    return;
  }
  board[r][c] = 0;
  if (r < board.length - 1) {
    ratInMaze(board, p + "D", r + 1, c, list);
  }
  if (c < board[0].length - 1) {
    ratInMaze(board, p + "R", r, c + 1, list);
  }
  if (r > 0) {
    ratInMaze(board, p + "U", r - 1, c, list);
  }

  if (c > 0) {
    ratInMaze(board, p + "L", r, c - 1, list);
  }
  board[r][c] = 1;
}

const list = [];
let mat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
ratInMaze(mat, "", 0, 0, list);
list.sort();
console.log(list);
