var isPalindrome = function (x) {
  // let pal=x.toString();
  // let i=0;
  // let j=pal.length-1;
  // while (i<j) {
  //     if (pal[i]==pal[j]) {
  //         i++;
  //         j--;
  //     }else{
  //         return false;
  //     }
  // }
  // return true;

  let revNum = 0;
  // Create a duplicate variable to
  // store the original number
  let dup = n;
  // Iterate through each digit of
  // the number until it becomes 0
  while (n > 0) {
    // Extract the last
    // digit of the number
    let ld = n % 10;
    // Build the reverse number
    // by appending the last digit
    revNum = revNum * 10 + ld;
    // Remove the last digit
    // from the original number
    n = Math.floor(n / 10);
  }
  // Check if the original number
  // is equal to its reverse
  return dup === revNum;
};
