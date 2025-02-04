var sortColors = function (nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count0++;
        if (nums[i] === 1) count1++;
        else count2++;
    }
    for (let i = 0; i < count0 ; i++) nums[i] = 0;
    for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
    for (let i = count0 + count1; i < nums.length; i++) nums[i] = 2;

    return nums;
};

//complexity time - O(N)+O(N)=O(N)
// space - O(1)

//Dutch National flag algorithm. 

//arr[0….low-1] contains 0. [Extreme left part]
// arr[low….mid-1] contains 1.
// arr[high+1….n-1] contains 2. [Extreme right part], n = size of the array

//The middle part i.e. arr[mid….high] is the unsorted segment. 

var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};