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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {   // 如果都是 null 也是相等的
    return true;
  } else if (p === null || q === null) {  // 否则第一个为 null ，另一个不为 null 是不相等的
    return false;
  }
  // 最后必须左边的都相等和右边的都相等并且值要相等才能判定最终相等
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;

};