var rotate = function (matrix) {
  // transpose
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) { // ignore diagonal ele and swap other part
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse

  for (let i = 0; i < n; i++) {
      matrix[i].reverse();
  }
  
};
