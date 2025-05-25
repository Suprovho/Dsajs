var orangesRotting = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let countFresh = 0;

  // Put the position of all rotten oranges in queue and count fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] !== 0) {
        countFresh++;
      }
    }
  }

  if (countFresh === 0) return 0;

  let minutes = 0;
  let processed = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // BFS from initially rotten oranges
  while (queue.length > 0) {
    const size = queue.length;
    processed += size;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < rows &&
          newY < cols &&
          grid[newX][newY] === 1
        ) {
          grid[newX][newY] = 2;
          queue.push([newX, newY]);
        }
      }
    }

    if (queue.length > 0) {
      minutes++;
    }
  }

  return countFresh === processed ? minutes : -1;
};
