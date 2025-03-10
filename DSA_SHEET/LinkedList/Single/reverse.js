export var reverseList = function(head) {
    if (head == null) {
        return head;
    }
   let prev = null;
   let present = head;
   let next = present.next;

    while (present != null) {
        present.next = prev;
        prev = present;
        present = next;
        if (next != null) {
            next = next.next;
        }
    }
    return prev;
};