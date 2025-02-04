function largest(arr) {
    // code here
    let max=Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
       max=Math.max(max,arr[i]);  
    }
  return max;
}