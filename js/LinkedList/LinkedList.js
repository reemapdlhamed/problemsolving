// Implementing a list Node :
// each node
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // pointer to the next node.
  }
}
// implementing a Linked List
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
}
//create a linked List

let head = new SinglyLinkedListNode(1);
let second = new SinglyLinkedListNode(2);
let third = new SinglyLinkedListNode(3);
let fourth = new SinglyLinkedListNode(4);
/* Three nodes have been allocated dynamically.
          We have references to these three blocks as head,  
          second and third
  
          llist.head        second              third
             |                |                  |
             |                |                  |
         +----+------+     +----+------+     +----+------+
         | 1  | null |     | 2  | null |     |  3 | null |
         +----+------+     +----+------+     +----+------+ */
head.next = second;
// Link first node with the second node

/*  Now next of the first Node refers to the second.  So they
            both are linked.
  
         llist.head        second              third
            |                |                  |
            |                |                  |
        +----+------+     +----+------+     +----+------+
        | 1  |  o-------->| 2  | null |     |  3 | null |
        +----+------+     +----+------+     +----+------+ */
second.next = third;
third.next = fourth;
// Link second node with the third node

/*  Now next of the second Node refers to third.  So all three
            nodes are linked.
  
         llist.head        second              third
            |                |                  |
            |                |                  |
        +----+------+     +----+------+     +----+------+
        | 1  |  o-------->| 2  |  o-------->|  3 | null |
        +----+------+     +----+------+     +----+------+ */
//linked list with node1
let list = new LinkedList(head);
// 1 -> 2 -> 3
// To print
function print() {
  let n = head;
  while (n !== null) {
    console.log(n.data);
    n = n.next;
  }
}
//Insertion :-
function push(newData) {
  let newNode = new SinglyLinkedListNode(newData);
  newNode.next = head;
  head = newNode;
}
//Delete:-
// head == null exit
// head . next = null
function deleteNode(pos) {
  if (head == null) return;
}
// Traverse Linked List :
