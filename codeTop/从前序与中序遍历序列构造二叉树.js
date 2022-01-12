/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 为了避免用每次用indexOf在中序树中查找根节点的值
  // 提前将中序树中所有值用Map存起来，查找时间缩短为O(1)
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const helper = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) return null;
    // 在前序树中第一个位置找到根节点的值
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    // 使用Map查找根节点的位置
    const mid = map.get(rootVal);
    // 左子树的节点个数
    const leftNum = mid - inStart;
    // 递归查找
    root.left = helper(preStart + 1, preStart + leftNum, inStart, mid - 1);
    root.right = helper(preStart + leftNum + 1, preEnd, mid + 1, inEnd);
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);

};
