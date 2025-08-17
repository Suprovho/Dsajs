var frequencySort = function (s) {
  const mp = new Map();

  for (const char of s) {
    if (mp.has(char)) {
      mp.set(char, mp.get(char) + 1);
    } else {
      mp.set(char, 1);
    }
  }
  const sortedArray = [...mp.entries()].sort((a, b) => b[1] - a[1]);
  // convert into array like this
  // [ ['t', 1], ['r', 1], ['e', 2] ]
  // [ ['e', 2], ['t', 1], ['r', 1] ] after sort in desc

  // create string based on r.
  let ss = ""; 

  for (const [char, freq] of sortedArray) {
    ss += char.repeat(freq); 
  }

  return ss;
};
