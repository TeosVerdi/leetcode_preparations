/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function(a,b) {
    const result = new ListNode(0);
    let temp = result;
    while (a !== null && b !== null) {
        if (a.val < b.val) {
            temp.next = a;
            a = a.next;
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return result.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }

    while (lists.length > 1) {
        const a = lists.shift();
        const b = lists.shift();
        lists.push(mergeTwoLists(a,b));
    }

    return lists[0];
};