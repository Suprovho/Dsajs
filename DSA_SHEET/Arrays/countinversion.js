function inversionCount(arr) {
    // your code here
    let cnt=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
              cnt++;  
            }
            
        }
    }
    return cnt;
}
const arr=[2, 4, 1, 3, 5]
console.log(inversionCount(arr));
