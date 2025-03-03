export var mergeTwoLists = function (list1, list2) {
  const ans = new ListNode();
  let curr = ans;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  while (list1 !== null) {
    curr.next = list1;
    list1 = list1.next;
    curr = curr.next;
  }
  while (list2 !== null) {
    curr.next = list2;
    list2 = list2.next;
    curr = curr.next;
  }
  return ans.next;
};

//*const ans = new ListNode();

// This creates a dummy node — a placeholder node at the very beginning of the linked list you're building. This dummy node itself does not contain any useful data (its value is usually null or 0, depending on implementation) at start. as prev seen this.head default point to null in prev chapter.

//! Example

// Imagine you are merging two lists:
// list1 = [1, 3, 5]
// list2 = [2, 4, 6]

// After merging, you want:
// [1, 2, 3, 4, 5, 6]

// If you returned ans, you'd get something like:
// [dummy or 0 or null , 1, 2, 3, 4, 5, 6]

// By returning ans.next, you correctly skip the dummy node and return: [1, 2, 3, 4, 5, 6]




