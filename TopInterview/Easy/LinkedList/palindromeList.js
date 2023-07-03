/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let length = 0;
    let pointer = head;

    while (pointer) {
        length++;
        pointer = pointer.next;
    }

    if (length <= 1) {
        return true;
    }

    pointer = head;
    let cache = [];
    for (let i = 0; i < Math.floor(length / 2); i++) {
        cache.push(pointer.val);
        pointer = pointer.next;
    }

    if (length % 2 === 1) {
        pointer = pointer.next;
    }

    while (cache.length) {
        if (cache.pop() !== pointer.val) {
            return false;
        }
        pointer = pointer.next;
    }
    return true;
};