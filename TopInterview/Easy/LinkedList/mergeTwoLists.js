/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let pointer1 = list1;
    let pointer2 = list2;
    let newHead;
    if (pointer1.val < pointer2.val) {
        newHead = pointer1;
        pointer1 = pointer1.next;
    } else {
        newHead = pointer2;
        pointer2 = pointer2.next;
    }
    let runner = newHead;
    while (pointer1 && pointer2) {
        if (pointer1.val < pointer2.val) {
            runner.next = pointer1;
            pointer1 = pointer1.next;
        } else {
            runner.next = pointer2;
            pointer2 = pointer2.next;
        }
        runner = runner.next;
    }

    while (pointer1) {
        runner.next = pointer1;
        pointer1 = pointer1.next;
        runner = runner.next;
    }

    while (pointer2) {
        runner.next = pointer2;
        pointer2 = pointer2.next;
        runner = runner.next;
    }

    return newHead;
};