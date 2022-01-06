
//  Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function levelOrder(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    let queue: TreeNode[] = [root];
    let ans: number[] = [];
    while (queue.length) {
        // 出队
        const node = queue.shift();
        ans.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return ans;
};