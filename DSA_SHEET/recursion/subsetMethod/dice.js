function dice(s, target,list) {
  if (target === 0) {
    list.push(s);
    return list;
  }
  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(s + i, target - i,list);
  }
}

const list=[];
dice("",4,list);
console.log(list);




