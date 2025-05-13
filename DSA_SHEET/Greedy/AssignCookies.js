// greedy algo is used when we have to strictly work with a min or max value a greed factor. like 2 array given 

var findContentChildren = function (g, s) {
  let m = g.length;
  let l = s.length;
  let i = 0;
  let j = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (i < l && j < m) {
      if (g[j]<=s[i]) {
         j++;
      }
      i++;
  }
  return j;
};
