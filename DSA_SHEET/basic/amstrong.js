function isArmstrong(num) {
  const k = String(num).length;
  let sum = 0;
  let n = num;
  while (n > 0) {
    let dig = n % 10;
    sum += Math.pow(dig, k);
    n = Math.floor(n / 10);
  }
  return sum === num;
}

const number = 153;
if (isArmstrong(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
