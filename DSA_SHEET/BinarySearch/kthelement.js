function kthElement(a, b, k) {
  const n1 = a.length;
  const n2 = b.length;
  let count = 1;
  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      if (count == k) return a[i];
      count++;
      i++;
    } else {
     if (count == k) return b[j];
      count++;
      j++;
    }
  }
  while (i < n1) {
    if (count == k) return a[i];
    count++;
    i++;
  }
  while (j < n2) {
    if (count == k) return b[j];
    count++;
    j++;
  }
  return -1;
}
