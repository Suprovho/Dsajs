//same as Longest Substring With At Most K Distinct Characters just this formula ->
// countSubstringsAtMostK(s,k)−countSubstringsAtMostK(s,k−1)

function countSubstr(s, k) {
    return countAtMostK(s, k) - countAtMostK(s, k - 1);
}

function countAtMostK(s, k) {
    if (k === 0) return 0; 

    let l = 0, count = 0;
    const map = new Map();

    for (let r = 0; r < s.length; r++) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        while (map.size > k) {
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) === 0) {
                map.delete(s[l]);
            }
            l++;
        }

        count += (r - l + 1); 
    }

    return count;
}

//*tc-O(N)


// Understanding the Two Functions
// countAtMostK(s, k):
// This function counts all substrings that have at most k distinct characters.

// Example: If k = 2 and s = "aba", countAtMostK(s, 2) counts substrings with 1 or 2 distinct characters.

// Substrings with at most 2 distinct characters: ["a", "ab", "aba", "b", "ba", "a"] (6 substrings)
// countAtMostK(s, k - 1):
// This function counts all substrings that have at most k - 1 distinct characters.

// Example: If k = 2 and s = "aba", countAtMostK(s, 1) counts substrings with 1 distinct character.

// Substrings with at most 1 distinct character: ["a", "b", "a"] (3 substrings)

// To get the exact count of substrings with exactly k distinct characters, we use the difference between the two values:

// Substrings with at most k distinct characters (countAtMostK(s, k)) include all substrings with 1, 2, ..., k distinct characters.
// Substrings with at most k - 1 distinct characters (countAtMostK(s, k - 1)) include all substrings with 1, 2, ..., k-1 distinct characters.

