function allPath(p, maze, r, c) {
  if (r === maze.length - 1 || c === maze[0].length - 1) {
    console.log(p);
    return;
  }
  if (!maze[r][c]) {
    return;
  }

  maze[r][c] = false;

  if (r < maze.length - 1) {
    allPath(p + "D", maze, r + 1, c);
  }
  if (c < maze[0].length - 1) {
    allPath(p + "R", maze, r, c + 1);
  }
  if (r > 0) {
    allPath(p + "U", maze, r - 1, c);
  }

  if (c > 0) {
    allPath(p + "L", maze, r, c - 1);
  }

  // this line is where the function will be over
  // so before the function gets removed, also remove the changes that were made by that function

  maze[r][c] = true;
}

const board = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

allPath("",board,0,0);
