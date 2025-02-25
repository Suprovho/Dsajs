function findSubarray(arr, n) {
    let hm = new Map();
    hm.set(0, 1); // edge case 
    let pre = 0, total = 0;
    
    for (let i = 0; i < n; i++) {
        pre += arr[i];
        
        if (hm.has(pre)) {
            total += hm.get(pre);
            hm.set(pre, hm.get(pre) + 1);
        } else {
            hm.set(pre, 1);
        }
    }
    
    return total;
}
