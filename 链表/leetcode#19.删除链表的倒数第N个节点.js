// 快慢指针，让快的指针先走 n 步，然后让快、慢指针一起走，当快指针走到最后一个，满指针的下一个就指向了我们要删除的那个，删除即可。

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
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let fast = dummyHead;
  let low = dummyHead;
  while (n--) fast = fast.next;
  while (fast.next) {
    fast = fast.next;
    low = low.next;
  }
  low.next = low.next.next;
  return dummyHead.next;
};