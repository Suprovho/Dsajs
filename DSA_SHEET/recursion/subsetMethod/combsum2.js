function findCombinations2(ind, arr, target, ans, ds) {
    if (target === 0) {
        ans.push([...ds]);
        return;
    }

    for (let i = ind; i < arr.length; i++) {
        if (i > ind && arr[i] === arr[i - 1]) continue;
        if (arr[i] > target) break;

        ds.push(arr[i]);
        findCombinations2(i + 1, arr, target - arr[i], ans, ds);
        ds.pop();
    }
}
const ans=[];
let arr=[1,1,1,2,2];
let target=4
findCombinations2(0,arr,target,ans,[]);
console.log(ans);
