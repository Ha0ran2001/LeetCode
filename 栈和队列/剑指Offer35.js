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
var copyRandomList = function (head, cacheNode = new Map()) {
  if (head === null) {
    return head;
  }

  if (!cacheNode.has(head)) {
    cacheNode.set(head, { val: head.val });
    Object.assign(cacheNode.get(head), { next: copyRandomList(head.next, cacheNode) }, { random: copyRandomList(head.random, cacheNode) });
  }
  return cacheNode.get(head);
};