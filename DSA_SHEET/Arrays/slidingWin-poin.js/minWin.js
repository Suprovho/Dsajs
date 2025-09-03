
var minWindow = function (s, t) {
    let n = s.length;
    let m = t.length;
    if (n < m) return "";

    let mp = new Map();
    for (let ch of t) {
        mp.set(ch, (mp.get(ch) || 0) + 1);
    }
    let count = mp.size;

    let start = 0;
    let min_len = Infinity;
    let left = 0; // left pointer

    for (let right = 0; right < n; right++) {
        if (mp.has(s[right])) {
            mp.set(s[right], mp.get(s[right]) - 1);
            if (mp.get(s[right]) === 0) count--;
        }

        while (count === 0) {
            if (right - left + 1 < min_len) { // one possible ans found
                min_len = right - left + 1; 
                start = left;
            }

            if (mp.has(s[left])) {
                mp.set(s[left], mp.get(s[left]) + 1);
                if (mp.get(s[left]) === 1) count++;
            }
            left++;
        }
    }

    return min_len === Infinity ? "" : s.substring(start, start + min_len);
};