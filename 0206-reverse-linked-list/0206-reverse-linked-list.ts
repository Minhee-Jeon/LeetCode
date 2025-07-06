/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
     if (head === null) return null;

  const valList = [];
  while (head && head.val !== null) {
    valList.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < valList.length; i++) {
    const newNode = new ListNode(valList[i]);
    newNode.next = head;
    head = newNode;
  }
  return head;

};