/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let pre = dummyHead;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let cur = pre;
  for (let i = 0; i < right - left + 1; i++) {
    cur = cur.next;
  }
  let leftNode = pre.next;
  let rightNode = cur.next;

  pre.next = null;
  cur.next = null;

  reverseList(leftNode)

  pre.next = cur;
  leftNode.next = rightNode;

  return dummyHead.next;
};

// 反转链表
const reverseList = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
}