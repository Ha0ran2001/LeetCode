/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let temp = new ListNode(-1);
  temp.next = head;
  let low = temp, fast = temp;
  while (k--) {
    fast = fast.next;
  }

  while (fast) {
    low = low.next;
    fast = fast.next;
  }
  return low;
};