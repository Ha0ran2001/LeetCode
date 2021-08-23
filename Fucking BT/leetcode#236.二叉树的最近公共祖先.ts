
// Definition for a binary tree node.
/* class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
} */


/**
 * 如果 root 为 p, q 的最近公共祖先，有以下几种情况
 * 1. p, q 在 root 的子树中
 * 2. p == root， 那么 直接返回 p
 * 3. q == root， 那么 直接返回 q
 * 
 * 采用后续遍历，先遍历左右子树，看能不能找到 p， q
 * 如果左右子树都能找到，说明root就是 LCA
 * 如果左子树找到了，右子树没找到，返回左子树的查找结果
 * 如果右子树找到，左子树没找到，返回右子树的查找结果
 * 
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 */


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root === p || root === q) {
    return root;
  }
  let left: TreeNode = lowestCommonAncestor(root.left, p, q);
  let right: TreeNode = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  if (left === null) return right;
  return left;
};