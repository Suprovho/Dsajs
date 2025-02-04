function myAtoi(str) {
  let s = str.trim();
  let result = 0;
  let sign = 1;
  let i = 0;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - "0");

    if (sign * result > INT_MAX) return INT_MAX;
    if (sign * result < INT_MIN) return INT_MIN;

    i++;
  }

  return result * sign;
}


