function betterString(str1, str2) {
  let set1 = new Set();
  let set2 = new Set();

  countDistinctSubsequences(str1, "", set1);
  countDistinctSubsequences(str2, "", set2);

  return set2.size > set1.size ? str2 : str1;
}

function countDistinctSubsequences(up, p, set) {
  if (up === "") {
    set.add(p);
    return;
  }

  let char = up[0];

  countDistinctSubsequences(up.substring(1), p + char, set);

  countDistinctSubsequences(up.substring(1), p, set);
}

let str1 = "gboubwd";
let str2 = "bekoilx";
console.log(betterString(str1, str2));
