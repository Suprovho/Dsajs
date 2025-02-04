function printNos(n) {
     if (n==0) {
        return;
     }
     printNos(n-1);
     console.log(n);
}

// printNos(10);

function print1toN(n) {
   if (n==0) {
      return;
   }
   console.log(n);
   print1toN(n-1);
}

console.log(print1toN(10));
