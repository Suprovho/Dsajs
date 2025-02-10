function phoneNo(p,up,list) {
    if (up=="") {
        list.push(p)
        return list;
    }

    let digit=up[0]-"0";
    for (let i = (digit-1)*3; i < digit*3; i++) {
        let ch=String.fromCharCode("a".charCodeAt()+i);
        phoneNo(p+ch,up.substring(1),list);
    }
}

let list=[];
phoneNo("","12",list);
console.log(list);
