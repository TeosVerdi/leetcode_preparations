// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
import ListNode from "./listNode";

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    let pointerLeft: ListNode | null = head;
    let pointerRight: ListNode | null = head.next;
    const PRSaved = pointerRight;

    while (pointerRight && pointerRight.next) {
        pointerLeft.next = pointerRight.next;
        pointerRight.next = pointerLeft.next.next;
        pointerLeft = pointerLeft.next;
        pointerRight = pointerRight.next;
    }

    pointerLeft.next = PRSaved;

    return head;
};