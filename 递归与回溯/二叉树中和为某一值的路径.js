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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (root === null) return [];

  let res = [];

  const dfs = (root, sum, path) => {
    // root.val === sum 表示叶子节点的值等于sum时就是这条路上的值的和等于target，因为sum一直在减
    if (root.val === sum && !root.left && !root.right) {
      res.push(path);
    }

    path.push(root.val);

    // path.slice() 表示浅拷贝
    root.left && dfs(root.left, sum - root.val, path.slice());
    root.right && dfs(root.right, sum - root.val, path.slice());

  }

  dfs(root, target, []);

  return res;
};