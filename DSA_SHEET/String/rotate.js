// tricky question --
// if we concat s+s then it will contain all the possible left shift ..
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).includes(goal);
};
