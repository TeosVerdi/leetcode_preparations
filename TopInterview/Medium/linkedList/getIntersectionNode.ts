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

import ListNode from "./listNode";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const aHash: { [key: string]: ListNode[] } = {};

    while (headA) {
        if (!aHash.hasOwnProperty(headA.val.toString())) {
            aHash[headA.val] = [];
        }
        aHash[headA.val].push(headA);
        headA = headA.next;
    }

    while (headB) {
        if (aHash.hasOwnProperty(headB.val.toString())) {
            if (aHash[headB.val].includes(headB)) {
                return headB;
            }
        }
        headB = headB.next;
    }
    return null;
};