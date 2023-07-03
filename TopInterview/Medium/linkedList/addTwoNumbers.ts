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

class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
   }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   let plusOne = false;
   let newList = new ListNode();
   const pointer = newList;
   while (l1 && l2) {
      let sum = l1.val + l2.val + (plusOne ? 1 : 0);
      plusOne = (sum >= 10);
      l1 = l1.next;
      l2 = l2.next;
      newList.next = new ListNode(sum % 10);
      newList = newList.next;
   }

   while (l1) {
      let sum = l1.val + (plusOne ? 1 : 0);
      plusOne = (sum >= 10);
      l1 = l1.next;
      newList.next = new ListNode(sum % 10);
      newList = newList.next;
   }

   while (l2) {
      let sum = l2.val + (plusOne ? 1 : 0);
      plusOne = (sum >= 10);
      l2 = l2.next;
      newList.next = new ListNode(sum % 10);
      newList = newList.next;
   }

   if (plusOne) {
      newList.next = new ListNode(1);
   }

   return pointer.next;
};