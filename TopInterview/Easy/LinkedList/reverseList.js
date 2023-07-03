/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let previous = null;
    let current;
    while (head) {
        current = head;
        head = head.next;
        current.next = previous;
        previous = current;
    }
    return previous;
};