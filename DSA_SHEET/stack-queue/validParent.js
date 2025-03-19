var isValid = function (s) {
  let ans = [];
  let str = [...s];
  for (const char of str) {
    if (char == "(" || char == "{" || char == "[") {
      ans.push(char);
    } else {
      if (char == ")") {
        if (str.length == 0 || ans.pop() != "(") {
          return false;
        }
      }
      if (char == "}") {
        if (str.length == 0 || ans.pop() != "{") {
          return false;
        }
      }
      if (char == "]") {
        if (str.length == 0 || ans.pop() != "[") {
          return false;
        }
      }
    }
  }
  return ans.length==0
};
