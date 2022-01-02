/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  // return head === null ? [] : reversePrint(head.next).concat(head.val);
  let stack = [], ans = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  const len = stack.length;
  for (let i = 0; i < len; i++)
    ans.push(stack.pop());

  return ans;
};