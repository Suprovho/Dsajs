var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if (s.length !== t.length) return false;
  let temp=[...t];
  let temp2=[...s];
  t = temp.sort().join("");
  s = temp2.sort().join("");
  return s===t;
};
