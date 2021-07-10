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
  // 迭代
  // let pre = null;
  // let cur = head;
  // while (cur) {
  //     let temp = cur.next;
  //     cur.next = pre;
  //     pre = cur;
  //     cur = temp;
  // }
  // return pre;

  // 递归
  if (head === null || head.next === null) return head;
  let reverseHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
};