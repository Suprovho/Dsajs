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