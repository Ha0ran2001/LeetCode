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
    let flag = false;
    while (queue.length) {
        const len = queue.length;
        let temp: number[] = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        flag && temp.reverse();
        flag = !flag;
        ans.push(temp);
    }
    // for (let i = 1; i < ans.length; i+=2) {
    //     ans[i] = ans[i].reverse();
    // }
    return ans;
};