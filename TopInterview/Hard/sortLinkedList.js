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

var merge = function(a, b) {
    if (a === null) {
        return b;
    }
    if (b === null) {
        return a;
    }

    if (a.val < b.val) {
        a.next = merge(a.next, b);
        return a;
    } else {
        b.next = merge(a, b.next)
        return b;
    }
}

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
  // General cases:
  let [prev, slow, fast] = [null, head, head];
    
  while( (fast != null) && (fast.next != null) ){
      [prev, slow, fast] = [slow, slow.next, fast.next.next];
  }
  

  // cut the linkage on midpoint
  if( prev != null ){
      prev.next = null;    
  }
  
  
  let firstHalf = sortList(head);
  let secondHalf = sortList(slow);  
  
  return  merge( firstHalf, secondHalf );
};
