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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function build(
  preorder: number[], preStart: number, preEnd: number,
  inorder: number[], inStart: number, inEnd: number
): TreeNode | null {
  if (preStart > preEnd) return null;

  // 前序遍历根节点就是第一个
  const rootVal = preorder[preStart];

  let index = 0;

  // 找中序遍历的根节点的位置
  for (let value of inorder) {
    if (value === rootVal) {
      index = inorder.indexOf(value);
    }
  }

  let leftSize = index - inStart;
  let root = new TreeNode(rootVal);

  root.left = build(
    preorder, preStart + 1, leftSize + preStart,
    inorder, inStart, index - 1);

  root.right = build(
    preorder, leftSize + preStart + 1, preEnd,
    inorder, index + 1, inEnd
  )
  return root;

}