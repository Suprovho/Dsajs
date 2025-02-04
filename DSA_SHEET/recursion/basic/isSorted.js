
function sorted(arr,index) {
    if (index==arr.length-1) {
        return true;
    }
    return arr[index]<arr[index+1] && sorted(arr,index+1);
}

const arr=[1,2,5,4,6];
console.log(sorted(arr,0));
