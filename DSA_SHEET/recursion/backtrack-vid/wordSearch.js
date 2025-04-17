var exist = function (board, word) {
    let rows = board.length;
    let col = board[0].length;
    const visited = Array.from({ length: rows }, () => Array(col).fill(false));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < col; j++) {
        if (board[i][j] == word[0] && wordSearch(board, word, i, j, 0, visited)) {
          return true;
        }
      }
    }
    return false;
  };
  
  function wordSearch(board, word, row, col, ind, visited) {
    if (ind == word.length) {
      return true;
    }
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      word[ind] !== board[row][col] ||
      visited[row][col]
    ) {
      return false;
    }
    visited[row][col] = true;
    if (
      wordSearch(board, word, row + 1, col, ind + 1, visited) ||
      wordSearch(board, word, row - 1, col, ind + 1, visited) ||
      wordSearch(board, word, row, col + 1, ind + 1, visited) ||
      wordSearch(board, word, row, col - 1, ind + 1, visited)
    )
      return true;
  
    visited[row][col] = false;
  
    return false;
  }
  