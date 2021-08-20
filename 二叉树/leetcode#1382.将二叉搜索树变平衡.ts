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

function toArr(node: TreeNode, arr: number[]) {
  if (node === null) return null;
  toArr(node.left, arr);
  arr.push(node.val);
  toArr(node.right, arr);
}

function buildBST(arr: number[]) {
  if (!arr.length) return null;
  let mid = arr.length >> 1;
  let root = new TreeNode(arr[mid]);
  root.left = buildBST(arr.slice(0, mid));
  root.right = buildBST(arr.slice(mid + 1));
  return root;
}

function balanceBST(root: TreeNode | null): TreeNode | null {
  let arr: number[] = [];
  toArr(root, arr);
  return buildBST(arr);
};