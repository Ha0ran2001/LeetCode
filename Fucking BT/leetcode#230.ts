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



function kthSmallest(root: TreeNode | null, k: number): number {
  // rank记录排名，res记录结果
  let rank: number = 0, res: number = 0;
  const traverse = (root: TreeNode | null, k: number): number => {
    if (root === null) return;

    traverse(root.left, k);

    rank++;
    if (rank === k) {
      res = root.val;
      return res;
    }


    traverse(root.right, k);

  }
  traverse(root, k);
  return res;
};
