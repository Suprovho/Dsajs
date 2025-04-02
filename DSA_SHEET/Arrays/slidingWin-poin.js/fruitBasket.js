function totalElements(arr) {
  let maxlen = 0;
  let left = 0;
  const map = new Map();

  for (let right = 0; right < arr.length; right++) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(arr[left], map.get(arr[left]) - 1);
      if (map.get(arr[left]) === 0) {
        map.delete(arr[left]);
      }
      left++;
    }
    maxlen = Math.max(maxlen, right - left + 1);
  }

  return maxlen;
}
