var reverseWords = function (s) {
    s = s.trim();  // Remove leading and trailing spaces
    let left = s.length - 1, right;
    let result = [];
  
    while (left >= 0) {
      // Skip trailing spaces between words
      while (left >= 0 && s[left] === ' ') left--;
  
      // Set right pointer at the end of the word
      right = left;
  
      // Find the start of the word
      while (left >= 0 && s[left] !== ' ') left--;
  
      // Extract the word and add to result array
      result.push(s.substring(left + 1, right + 1));
    }
  
    // Join words with a single space
    return result.join(' ');
};

const s = "the sky is blue";
console.log(reverseWords(s));
