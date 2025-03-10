import { middleNode } from "./middle";
import { reverseList } from "./reverse";

var isPalindrome = function (head) {
  let mid = middleNode(head);
  let headSecond = reverseList(mid);
  let reverseHead = headSecond; // for re-reversing storing  it in temp var..

  while (head !== null && headSecond !== null) {
    if (head.val !== headSecond.val) {
      break;
    }
    head = head.next;
    headSecond = headSecond.next;
  }
  
  reverseList(reverseHead);

  if (head == null && headSecond == null) {
    return true;
  }


  return false;
};
