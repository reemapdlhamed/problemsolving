/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Input: 1 -> 2 -> 4 || 1 -> 3 -> 4
//Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
//
//1- Compare the head of both linked lists
//2-Find the smaller node among the two head nodes. The current element will be the smaller node among two head nodes.
//3-The rest elements of both lists will appear after that.
//4-Now run a recursive function with parameters, the next node of the smaller element, and the other head.
//5-The recursive function will return the next smaller element linked with rest of the sorted element.
//6-Handle some corner cases.
//                  If both the heads are NULL return null.
//                  If one head is null return the other.
//******************************************************** */
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

// Merge Two Lists
// Compare heads
//Recursion
function mergeTwoListsTwo(list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoListsTwo(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsTwo(list1, list2.next);
    return list2;
  }
}
//*************************** */
function mergeTwoLists(list1, list2) {
  let tmp = new ListNode(-1);
  let head = tmp;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tmp.next = list1;
      list1 = list1.next;
    } else {
      tmp.next = list2;
      list2 = list2.next;
    }
    tmp = tmp.next;
  }
  if (list1) {
    tmp.next = list1;
  } else {
    tmp.next = list2;
  }
  return head.next;
}
