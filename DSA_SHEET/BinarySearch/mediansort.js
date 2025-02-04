function median(a, b) {
  // size of two given arrays:
  const n1 = a.length,
    n2 = b.length;
  const n = n1 + n2; // total size
  // required indices:
  const ind2 = Math.floor(n / 2);
  const ind1 = ind2 - 1;
  let cnt = 0;
  let ind1el = -1,
    ind2el = -1;

  // apply the merge step:
  let i = 0,
    j = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      if (cnt === ind1) ind1el = a[i];
      if (cnt === ind2) ind2el = a[i];
      cnt++;
      i++;
      
    } else {
        if (cnt === ind1) ind1el = b[j];
        if (cnt === ind2) ind2el = b[j];
        cnt++;
        j++;
        
    }
}

// copy the left-out elements:
while (i < n1) {
    if (cnt === ind1) ind1el = a[i];
    if (cnt === ind2) ind2el = a[i];
    cnt++;
    i++;
    
}
while (j < n2) {
    if (cnt === ind1) ind1el = b[j];
    if (cnt === ind2) ind2el = b[j];
    cnt++;
    j++;
    
  }

  // Find the median:
  if (n % 2 === 1) {
    return ind2el;
  }

  return (ind1el + ind2el) / 2.0;
}

const a = [1, 4, 7, 10, 12];
const b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));
