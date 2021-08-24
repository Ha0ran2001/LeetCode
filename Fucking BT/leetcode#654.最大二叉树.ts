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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  let max = Math.max(...nums);

  let root = new TreeNode(max);

  root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(max)));
  root.right = constructMaximumBinaryTree(nums.slice(nums.indexOf(max) + 1));

  return root;

};