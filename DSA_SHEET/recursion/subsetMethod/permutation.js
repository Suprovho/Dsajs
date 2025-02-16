function permutations(p, list, up) {
  if (up === "") {
    list.push(p);
    return;
  }
  let char = up[0];
  for (let i = 0; i <= p.length; i++) {  // prev we know that we have 2 recursive call but now it depend on length of p
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    permutations(f + char + s, list, up.substring(1));
  }
}

let s="abc";
let list=[];
permutations("", list, s);
console.log(list);

function permutationsDigit(p, list, up) {
  if (up.length === 0) {
    list.push([...p]);
    return;
  }
  let digit = up[0];
  for (let i = 0; i <= p.length; i++) {  
    let firstPart = p.slice(0, i);
    let secondPart = p.slice(i);
    permutationsDigit([...firstPart,digit,...secondPart], list, up.slice(1));
  }
}

let d=[1,2,3];
let list2=[];
permutationsDigit([], list2, d);
console.log(list2);