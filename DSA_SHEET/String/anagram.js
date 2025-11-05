var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) return false;
        else {
            if (map.get(t[i]) <= 0) return false;
            else map.set(t[i], (map.get(t[i])) - 1);
        }
    }

    return true;
};

// return s.split("").sort().join("")===t.split("").sort().join("");