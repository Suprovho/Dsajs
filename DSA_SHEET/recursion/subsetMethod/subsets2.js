function subset2(arr,ind,list,ans) {
    ans.push([...list]);
    for (let i = ind; i < arr.length; i++) {
        if(i!==ind && arr[i]===arr[i-1])continue;
        list.push(arr[i])
        subset2(arr,i+1,list,ans)
        list.pop(); 
    }
}

let nums = [1, 2, 2];
nums.sort((a, b) => a - b); 
let ansList = [];
subset2(nums,0,[],ansList);
console.log(ansList);