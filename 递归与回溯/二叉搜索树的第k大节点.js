/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  if (!root) return;

  let res, num = 0;

  const pastOrder = (root) => {
    if (!root) return null;
    pastOrder(root.right);
    num++;
    if (num === k) {
      res = root.val;
      return;
    }
    pastOrder(root.left);

  }

  pastOrder(root);

  return res;
};