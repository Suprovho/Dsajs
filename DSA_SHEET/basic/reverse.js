var reverse = function(n) {
    let revNum=0;
    while (n > 0) {
        // Extract the last digit of
        // 'n' and store it in 'ld'.
        let ld = n % 10;
        // Multiply the current reverse number
        // by 10 and add the last digit.
        revNum = (revNum * 10) + ld;
        // Remove the last digit from 'n'.
        n = Math.floor(n / 10);
    }

    return revNum;

};


