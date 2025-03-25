var countGreaterElements = function (arr, indices) {
    let map = new Map(); 
    let stack = [];
    let n = arr.length;
  
    for (let i = n - 1; i >= 0; i--) {

      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop(); 
      }
      
      map.set(i, stack.length);
  
      stack.push(arr[i]);
    }
  
    return indices.map((idx) => map.get(idx) || 0);
  };
  

  let arr = [3, 4, 2, 7, 5, 8, 10, 6];
  let indices = [0, 5];
  
  console.log(countGreaterElements(arr, indices)); 

  