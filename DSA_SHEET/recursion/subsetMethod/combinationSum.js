function combsum(index,arr, target, result, currentCombination) {
    if (index===arr.length) {
        if (target==0) {
            result.push([...currentCombination])
        }
        return;
    }

    if (arr[index]<=target) {
        currentCombination.push(arr[index]);
        combsum(index,arr,target-arr[index],result,currentCombination);
        currentCombination.pop(); 
    }
    combsum(index + 1, arr, target, result, currentCombination);
}