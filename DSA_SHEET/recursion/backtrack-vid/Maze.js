function count(row, col) {
  if (row == 1 || col == 1) {
    return 1;
  }
  let left = count(row - 1, col);
  let right = count(row, col - 1);

  return left + right;
}

console.log(count(3, 3));

function path(p, r, c) {
  if (r == 1 && c == 1) {
    console.log(p);
    return;
  }

  if (r > 1) {
    path(p + "D", r - 1, c);
  }

  if (c > 1) {
    path(p + "R", r, c - 1);
  }
}

path("", 3, 3);

function pathDiagonal(p, r, c, list) {
  if (r == 1 && c == 1) {
    list.push(p);
    return list;
  }
  if (r > 1 && c > 1) {
    pathDiagonal(p + "D", r - 1, c - 1, list);
  }

  if (r > 1) {
    pathDiagonal(p + "V", r - 1, c, list);
  }

  if (c > 1) {
    pathDiagonal(p + "H", r, c - 1, list);
  }
}

let list = [];
pathDiagonal("", 3, 3, list);
console.log(list);

function pathRestrictions(p, maze, r, c) {
  if (r == maze.length - 1 && c == maze[0].length - 1) {
    console.log(p);
    return;
  }

  if (!maze[r][c]) {
    return;
  }

  if (r < maze.length - 1) {
    pathRestrictions(p + "D", maze, r + 1, c);
  }

  if (c < maze[0].length - 1) {
    pathRestrictions(p + "R", maze, r, c + 1);
  }
}

const board = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

pathRestrictions("", board, 0, 0);
