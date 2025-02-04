//*Brute force

function majorityElement(v) {
  const n = v.length; // size of the array
  const ls = []; // list of answers

  for (let i = 0; i < n; i++) {
    // selected element is v[i]:
    // checking if v[i] is not already
    // a part of the answer:
    if (ls.length == 0 || ls[0] != v[i]) {
      let cnt = 0;
      for (let j = 0; j < n; j++) {
        // counting the frequency of v[i]
        if (v[j] == v[i]) {
          cnt++;
        }
      }

      // check if frequency is greater than n/3:
      if (cnt > Math.floor(n / 3)) ls.push(v[i]);
    }

    if (ls.length == 2) break;
  }

  return ls;
}

// better

function majorityElement2(v) {
  const n = v.length; // size of the array
  const ls = []; // list of answers

  // declaring a map:
  const mpp = new Map();

  // least occurrence of the majority element:
  const mini = Math.floor(n / 3) + 1;

  // storing the elements with its occurrence:
  for (let i = 0; i < n; i++) {
    if (mpp.has(v[i])) {
      mpp.set(v[i], mpp.get(v[i]) + 1);
    } else {
      mpp.set(v[i], 1);
    }

    // checking if v[i] is the majority element:
    if (mpp.get(v[i]) == mini) {
      ls.push(v[i]);
    }
    if (ls.length == 2) break;
  }

  return ls;
}

//*optimal

// check the edge case properly means the if else 

var majorityElement = function (arr) {
  let count1 = 0;
  let count2 = 0;
  let el1, el2;
  for (let i = 0; i < arr.length; i++) {
    if (count1 === 0 && el2 !== arr[i]) {
      count1 = 1;
      el1 = arr[i];
    } else if (count2 === 0 && el1 !== arr[i]) {
      count2 = 1;
      el2 = arr[i];
    } else if (el1 === arr[i]) {
      count1++;
    } else if (el2 === arr[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el1) {
      count1++;
    } else if (arr[i] === el2) {
      count2++;
    }
  }

  if (count1 > Math.floor(arr.length / 3)) {
    ans.push(el1);
  }
  if (count2 > Math.floor(arr.length / 3)) {
    ans.push(el2);
  }
  return ans;
};
