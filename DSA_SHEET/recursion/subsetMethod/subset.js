//     ""
//    /   \
//    "a"   ""                    // this tree contain only unprocessed nodes.
//    /  \   /  \
//    "ab"  "a" "b"  ""
//    /  \   / \  / \  / \
//    "abc" "ab" "ac" "a" "bc" "b" "c" ""

function subset(s, list, current) {
  if (s == "") {
    list.push(current);
    return; // we don't need to return list as its pass by ref and we are passing in arg externally if we do in internal we should return list.
  }

  let char = s[0];
  subset(s.substring(1), list, char + current); //include
  subset(s.substring(1), list, current); //exclude
}

const list = [];
subset("abc", list, "");
console.log(list);

function subsetNo(arr, current, list) {
  if (arr.length === 0) {
    list.push([...current]);
    return;
  }

  let ele = arr[0];
  subsetNo(arr.slice(1), [...current, ele], list);
  subsetNo(arr.slice(1), current, list);
}

const list2 = [];
const arr = [1, 2, 3];
subsetNo(arr, [], list2);
console.log(list2);
