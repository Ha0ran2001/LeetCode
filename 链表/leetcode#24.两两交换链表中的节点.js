

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
var swapPairs = function (head) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let p = dummyHead;
  let node1, node2;
  while ((node1 = p.next) && (node2 = p.next.next)) {
    // 交换
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;

    // 跳两格
    p = node1;
  }
  return dummyHead.next;
};