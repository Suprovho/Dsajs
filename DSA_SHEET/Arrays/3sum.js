var threeSum = function (nums) {
  // main mo-to to handel all kind of duplicates 
  let ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let j=i+1;
    let k=n-1;
    while (j<k) {
        let sum=nums[i]+nums[j]+nums[k];
        if (sum<0) {
            j++;
        }else if(sum>0){
            k--;
        }else{
            let temp = [nums[i], nums[j], nums[k]];
            ans.push(temp);
            j++;
            k--;
            while(j<k&&nums[j]===nums[j-1])j++;
            while(j<k&&nums[k]===nums[k+1])k--;
        }
    }
  }
  return ans;
};
