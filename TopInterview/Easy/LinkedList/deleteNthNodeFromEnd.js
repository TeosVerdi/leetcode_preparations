/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let pointer = head;
    let length = 0;
    while (pointer) {
        pointer = pointer.next;
        length++;
    }

    console.log(length);

    if (length === n) { return head.next }
    pointer = head;
    for (let i = 1; i < length - n; i++) {
        pointer = pointer.next;
    }

    pointer.next = pointer.next.next;

    return head;
};

// One-pass 

var removeNthFromEnd = function (head, n) {
    let [slow, fast] = [head, head];

    for (i = 1; i <= n; i++) {
        fast = fast.next;
    }

    if (!fast) { return head.next }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return head;
};
