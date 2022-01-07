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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    let ans: number[][] = [];
    let queue: TreeNode[] = [root];

    while (queue.length) {
        const len = queue.length;
        let temp: number[] = [];
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