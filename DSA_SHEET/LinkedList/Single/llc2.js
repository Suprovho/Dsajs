import { lengthCycle } from "./lengthcycle";

var detectCycle = function(head) {
    let length=lengthCycle(head); 
    if (length==0) {
        return null;
    }
    let f=head;
    let s=head;
    while(length>0) {
        s=s.next;
        length--;
    }
    // keep moving both forward and they will meet at cycle start.
    while(f!==s){
      f=f.next;
      s=s.next;
    }

    return s;
};