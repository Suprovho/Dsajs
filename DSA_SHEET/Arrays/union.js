function findUnion(a, b) {
  // your code here
 
  let set = new Set([...a,...b]); // merge two array and store unique in set
  const myArray = [...set]; 
  myArray.sort((a, b) => a - b);
  return myArray;
}

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 6, 7];
console.log(findUnion(a, b));

var missingNumber = function(nums) {
    let n=nums.length;
    let sum=Math.floor(n*(n+1)/2);
    let ans=0;
    for (let i = 0; i < n; i++) {
        ans+=nums[i];
    } 
    let missNo=sum-ans;
    return missNo;
};

let arr=[9,6,4,2,3,5,7,0,1];
console.log(missingNumber(arr));
