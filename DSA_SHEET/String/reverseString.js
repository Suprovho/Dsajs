var reverseWords = function (s) {
    let str = s.trim();
    let ans = [];
    let n = str.length - 1;
    let end = n;
    for (let i = n; i >= 0; i--) {
        if (str[i] == " ") {
            if (i < end) { // ensure a word exists
                ans.push(str.substring(i + 1, end + 1));
            };
            end = i - 1;
        }
    }
    if (end >= 0) ans.push(str.substring(0, end + 1)); // first word as it dont have space we break word after space but here it won't work
    return ans.join(" ");
};


// sc-O(1);
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};