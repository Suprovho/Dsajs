function subsetSum(arr, sum, ind, list) {
  if (ind === arr.length) {
    list.push(sum);
    return list;
  }
  subsetSum(arr, arr[ind] + sum, ind + 1, list);
  subsetSum(arr, sum, ind + 1, list);
}

let arr= [1,2,3];
let list=[];
subsetSum(arr,0,0,list);
console.log(list);
