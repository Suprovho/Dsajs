var addTwoNumbers = function (l1, l2) {
  const ans = new ListNode();
  let curr = ans;
  let car = 0;
  while (l1 !== null || l2 !== null) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + car;
    car = Math.floor(sum / 10);
    sum = sum % 10;

    curr.next = new ListNode(sum);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  //* Explicitly add the last carry

  if (car > 0) {
    curr.next = new ListNode(car);
  }

  return ans.next;
};
