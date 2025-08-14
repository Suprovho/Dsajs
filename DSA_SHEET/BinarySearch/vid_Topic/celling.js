const arr = [2, 3, 5, 9, 14, 16, 18];
const target = 15;

function Celling(arr,target) {
    if (target > arr[arr.length - 1]) {
        return -1;
    }
    let start=0;
    let end=arr.length-1;
    while (start<=end) {
        let mid=Math.floor((start+end)/2);
        if (arr[mid]===target) {
            return mid;
        }
        if (arr[mid]<target) {
            start=mid+1;
        } else {
            end=mid-1;
        }
    }
    return start;
}

// duplicate 
function lowerBound(arr, target) {
  // code here
  let start = 0;
  let end = arr.length - 1;
  let ans = arr.length;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] >= target) {
      ans = mid; // store possible answer
      end = mid - 1; // go left to find first occurrence
    } else {
      start = mid + 1;
    }
  }
  return ans;
}


console.log(Celling(arr,target));

const arr2=[2, 3, 5, 9, 14, 16, 18];
const target2=1;

function Floor(arr,target) {
    if (target > arr[arr.length - 1]) {
        return -1;
    }
    let start=0;
    let end=arr.length-1;
    while (start<=end) {
        let mid=Math.floor((start+end)/2);
        if (arr[mid]===target) {
            return mid;
        }
        if (arr[mid]<target) {
            start=mid+1;
        } else {
            end=mid-1;
        }
    }
    return end;
}

console.log(Floor(arr2,target2));