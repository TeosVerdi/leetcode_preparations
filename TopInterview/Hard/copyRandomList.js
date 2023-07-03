/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }

    let tempHead = head;

    while (tempHead !== null) {
        /*
            We make a new nodeList interweaved into an old one
        */
        tempHead.next = new Node(tempHead.val, tempHead.next, tempHead.random);
        tempHead = tempHead.next.next;
    }

    let normalHead = head;
    let altHead = head.next;
    let resultHead = head.next;

    while (altHead !== null) {
        // Fixing random in new
        if (altHead.random !== null) {
            altHead.random = altHead.random.next;
        }
        if (altHead.next) {
            altHead = altHead.next.next;
        } else {
            break;
        }
    }

    altHead = head.next;

    while (altHead.next !== null) {
        // We revert interweaving into two separate nodeLists, fixing random
        normalHead.next = altHead.next;
        normalHead = normalHead.next;
        altHead.next = normalHead.next;
        altHead = altHead.next;
    }

    normalHead.next = altHead.next;

    return resultHead;
};