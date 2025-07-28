function minValueToBalance(arr) {
  // code here
 let n = Math.floor(arr.length / 2);

    let lsum = 0;
    let rsum = 0;

    for (let i = 0; i < n; i++) {
        lsum += arr[i];
        rsum += arr[n + i];
    }

    return Math.abs(lsum - rsum);
}
