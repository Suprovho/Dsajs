export function lengthCycle(head) {
  // your code here
  let slow = head;
  let fast = head;
  let length = 0;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      let temp = slow;
      do {
        temp = temp.next;
        length++;
      } while (temp !== slow);
      return length; //Return after counting loop length otherwise it will cause infinite loop.
    }
  }
  return 0;
}
