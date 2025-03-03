var deleteDuplicates = function (head) {
  if (head === null) return null;
  let curr = head;
  while (curr.next !== null) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
