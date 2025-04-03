var minWindow = function (s, t) {
  let m = s.length,
    n = t.length;
  if (m < n) return "";

  let hashMap = new Map(); // Frequency map for characters in t
  for (let i = 0; i < n; i++) {
    hashMap.set(t[i], (hashMap.get(t[i]) || 0) + 1);
  }
  let l = 0,
    r = 0;
  let ct = 0; // Count of matching characters
  let minLen = Infinity; // Initialize minLen to a large value
  let sIndex = -1;

  while (r < m) {
    let rightChar = s[r];
    if (hashMap.has(rightChar)) {
      if (hashMap.get(rightChar) > 0) {
        ct++;
      }
      hashMap.set(rightChar, hashMap.get(rightChar) - 1);
    }

    while (ct === n) {
      // When we have a valid window, try to minimize it
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        sIndex = l;
      }

      let leftChar = s[l];
      if (hashMap.has(leftChar)) {
        hashMap.set(leftChar, hashMap.get(leftChar) + 1);
        if (hashMap.get(leftChar) > 0) {
          ct--;
        }
      }
      l++;
    }

    r++;
  }

  return sIndex === -1 ? "" : s.substring(sIndex, sIndex + minLen);
};
