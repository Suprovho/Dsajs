var partition = function(s) {
    const list=[];
    PartitionHelper(s,0,[],list);
    return list;
};

function PartitionHelper(s,ind,ans,list) {
    if (ind==s.length) {
        list.push([...ans]);
        return;
    }
    for (let i = ind; i < s.length; i++) {
        if (isPalindrome(s,ind,i)) {
            ans.push(s.substring(ind,i+1));
            PartitionHelper(s,i+1,ans,list);
            ans.pop();
        }
    }
}

function isPalindrome(s,start,end) {
    while (start<=end) {
        if (s[start]!==s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}