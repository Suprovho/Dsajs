// merge sort not in place

import { mergeTwoLists } from "./mergeSorted";


var sortList = function(head) {
    if (head==null||head.next==null) {
        return head;
    }

    let midPrev = middleNode(head);
    let nextPart = midPrev.next; // these 2 step to divide ll in 2 half
    midPrev.next = null;

    let left=sortList(head);
    let right=sortList(nextPart);

    return mergeTwoLists(left,right);
};

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;  // to split the list

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    return prev;  // prev will be the node before the exact middle
};