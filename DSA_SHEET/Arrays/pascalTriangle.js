 // ncr approach follow the article

 function generateRow(row) {
    let ans=1;
    let ansrow=[1];
    for (let col = 1; col < row; col++) {
        ans=ans*(row - col);
        ans=ans/col;
        ansrow.push(ans);
    }
    return ansrow;
 }

 var generate = function(numRows) {
    let ans=[]
    for (let row = 1; row <= numRows; row++) {
        ans.push(generateRow(row));
    }
    return ans;
 };

 //Tc=O(n2)