var merge = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [arr[0]];
  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1];
    const curr = arr[i];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr);
    }
  }
  return ans;
};
