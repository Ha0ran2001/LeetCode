/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {

  let pre = null, head = null; // pre表示前躯节点， head表示头节点

  if (!root) return;

  // 中序遍历 cur表示后继节点
  const inOrder = (cur) => {
    if (!cur) return;

    inOrder(cur.left);

    if (!pre) { // pre为空，表示 pre 为 head，这样就得让头指针指向下一个
      head = cur;
    } else { // 否则就让pre的右指针指向后继节点
      pre.right = cur;
    }

    cur.left = pre; // 后继节点的左指针指向前驱节点
    pre = cur; // 跳到下一个

    inOrder(cur.right);
  }

  inOrder(root);

  pre.right = head;
  head.left = pre;

  return head;


}