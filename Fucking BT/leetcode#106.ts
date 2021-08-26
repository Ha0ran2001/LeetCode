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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const build = (
    inorder: number[], inStart: number, inEnd: number,
    postorder: number[], postStart: number, postEnd: number
  ): TreeNode | null => {
    if (postStart > postEnd) return null;

    // 后续遍历，root在最后
    const rootVal = postorder[postEnd];
    let index = 0;

    // 找中序遍历的根节点
    for (let value of inorder) {
      if (value === rootVal) {
        index = inorder.indexOf(value);
      }
    }

    let leftSize = index - inStart;
    let root = new TreeNode(rootVal);
    root.left = build(
      inorder, inStart, index - 1,
      postorder, postStart, postStart + leftSize - 1);

    root.right = build(
      inorder, index + 1, inEnd,
      postorder, leftSize + postStart, postEnd - 1);

    return root;
  }

  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};