//Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function middleNode(head) {
  let half = head;
  let end = head;
  // there are more than 1 node
  while (end != null && end.next != null) {
    half = half.next;
    end = end.next.next;
  }
  return half;
}
