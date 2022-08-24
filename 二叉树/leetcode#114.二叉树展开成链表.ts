/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  // base case
  if (root === null) return;

  flatten(root.left);
  flatten(root.right);
  // 后序遍历
  // 递归后左右子树已经被拉成一条链表
  // ? 原因我也看不懂，递归水太深了

  let left: TreeNode = root.left;
  let right: TreeNode = root.right;

  root.left = null
  root.right = left;


  while (root.right) {
    root = root.right;
  }
  root.right = right;

};