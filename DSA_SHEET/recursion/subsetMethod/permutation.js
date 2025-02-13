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

