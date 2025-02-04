//*OPtimal ->

// let row[n] = {0}; --> matrix[..][0]
// let col[m] = {0}; --> matrix[0][..]

function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // row
        if (j !== 0) {
          matrix[j][0] = 0; //col
        } else {
          col0 = 0;
        }
      }
    }
  }
  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        // Check for col & row:
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }
  // Step 3: Finally mark the 1st col & then 1st row:
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
}

//*optimised ->

function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const row = new Array(n).fill(0); // row array
  const col = new Array(m).fill(0); // col array

  // Traverse the matrix:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // mark ith index of row with 1:
        row[i] = 1;

        // mark jth index of col with 1:
        col[j] = 1;
      }
    }
  }

  // Finally, mark all (i, j) as 0
  // if row[i] or col[j] is marked with 1.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

//*Brute ->
function markRow(matrix, n, m, i) {
  // set all non-zero elements as -1 in the row i:
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function markCol(matrix, n, m, j) {
  // set all non-zero elements as -1 in the col j:
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function zeroMatrix(matrix, n, m) {
  // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, n, m, i);
        markCol(matrix, n, m, j);
      }
    }
  }
  // Finally, mark all -1 as 0:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}
