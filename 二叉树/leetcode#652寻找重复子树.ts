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



function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  // visited 记录出现的子树的次数，res 记录结果
  let visited = new Map<string, number>(), res: TreeNode[] = [];

  // 序列化树，变为字符串
  const serialization = (root: TreeNode): string => {
    // base case
    if (root === null) return '#';

    const str = `${serialization(root.left)},${serialization(root.right)},${root.val}`;
    // 如果有则设置然后再判断是否次数为2，是就记录到res中，
    // 没有就只设置
    if (visited.has(str)) {
      visited.set(str, visited.get(str) + 1);
      if (visited.get(str) === 2) {
        res.push(root);
      }
    } else {
      visited.set(str, 1);
    }
    return str;
  }

  serialization(root);
  return res;
};
