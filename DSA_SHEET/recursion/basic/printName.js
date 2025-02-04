function name(n) {
    if (n<=0) {
        return;
    }
    console.log("GFG");
    name(n-1);
}

console.log(name(5));
