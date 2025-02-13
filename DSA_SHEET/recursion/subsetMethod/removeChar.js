function removeChar(s) {
    if (s.length==0) {
        return "";
    }
    let ans=s[0];
    if (ans=="a") {
        return removeChar(s.substring(1));
    }
    else{
        return ans+removeChar(s.substring(1))
    }
}

let s="aabcd";
console.log(removeChar(s));

function removeWord(s) {
    if (s.length==0) {
        return "";
    }
    if (s.startsWith("apple")) {
        return removeWord(s.substring(5));
    }
    else{
        return s[0]+removeWord(s.substring(1))
    }
}

let a="helloapple";
console.log(removeWord(a));
