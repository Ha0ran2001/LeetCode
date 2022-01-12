/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root]; // 根据先进先出用队列存储每一层的节点
  let ans = []; // 结果用二维数组存储

  while (queue.length) {
    const len = queue.length;
    let temp = []; // 储存每一层的节点
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(temp);
  }

  return ans;
};