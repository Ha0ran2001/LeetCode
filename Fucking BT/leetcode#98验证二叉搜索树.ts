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

type Tree = TreeNode | null;


function isValidBST(root: Tree): Boolean {
  return validBST(root, null, null);
};

function validBST(root: Tree, min: Tree, max: Tree): Boolean {
  if (root === null) return true;

  if (min !== null && root.val <= min.val) return false;

  if (max !== null && root.val >= max.val) return false;

  // 保证 root.left.val 最小值是 root.val
  // root.right.val 最大值是 root.val
  return validBST(root.left, min, root) && validBST(root.right, root, max);
}