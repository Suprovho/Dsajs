var removeNthFromEnd = function (head, n) {
  if (head == null || head.next == null) {
    return null;
  }
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast === null) return head.next; // edge case if n=size of ll

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next; // removal.

  return head;
};
