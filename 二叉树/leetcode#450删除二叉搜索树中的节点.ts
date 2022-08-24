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
const getMinNode = (node: TreeNode): TreeNode => {
  while (node.left !== null) {
    node = node.left;
  };
  return node;
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null;

  if (root.val === key) {

    if (root.left === null) return root.right;

    if (root.right === null) return root.left;

    // 现在是左右子树都不为空的情况
    // 查找右子树的最小值，因为二叉搜索树的特点就是左子树小于右子树
    let minNode: TreeNode = getMinNode(root.right);
    // 把右子树的最小值给当前的root.val, 这样root.val的值就是左子树的最大值，右子树的最小值 
    root.val = minNode.val;
    // 现在删除 minNode，而不用删除 root.val，相当于交换了
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }

  return root;
};