function Sum(arr,target,index,curr) {
    if (index===arr.length) {
        return curr==target?1:0;
    }
    let include=Sum(arr,target,index+1,curr+arr[index]);
    let exclude=Sum(arr,target,index+1,curr);

    return include+exclude;
}

console.log(Sum([5, 2, 3], 5,0,0)); 