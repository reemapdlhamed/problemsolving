//Given the head of a singly linked list, reverse the list, and return the reversed list.
//Input: head = [1,2]
// Output: [2,1]
//Input: 1 -> 2 -> null
//Output: 2 -> 1 -> null
//The idea is to reach the last node of the linked list using recursion then start reversing the linked list.
// 1- Divide the list in two parts – first node and rest of the linked list.
//2- Call reverse for the rest of the linked list.
// 3-Link the rest linked list to first
//4-Fix head pointer to NULL
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
// revrse function
function reverseList(head) {
  if (head == null || head.next == null) return head;
  const next = head.next;
  const newHead = reverseList(next);
  head.next = null;
  next.next = head;

  return newHead;
}
