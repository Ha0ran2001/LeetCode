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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  let recursivelyBuildBST = (left: number, right: number): TreeNode => {
    if (left > right) return null;
    let midIndex: number = (left + right) >> 1;
    let newRoot = new TreeNode(nums[midIndex]);
    newRoot.left = recursivelyBuildBST(left, midIndex - 1);
    newRoot.right = recursivelyBuildBST(midIndex + 1, right);
    return newRoot;
  }
  return recursivelyBuildBST(0, nums.length - 1);
};