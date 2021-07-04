/**
 * 注意最后一位的进位
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode('0'); //头结点
  let carry = 0; //进位
  let p = head;
  while (l1 || l2) {
    let val1 = (l1 !== null) ? l1.val : 0;
    let val2 = (l2 !== null) ? l2.val : 0;
    let ans = val1 + val2 + carry;
    // carry = Math.floor(ans / 10);
    carry = ans >= 10 ? 1 : 0;
    p.next = new ListNode(ans % 10);
    p = p.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);

  }
  carry && (p.next = new ListNode(carry))
  return head.next;
};