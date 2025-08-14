function evenlyDivides(n) {
    // code here
    let count=0;
    let digits=n.toString() ;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i]==0) {
            continue;
        }
        if (digits[i]%2==0) {
            count++;
        }
    }
    return count;
}
