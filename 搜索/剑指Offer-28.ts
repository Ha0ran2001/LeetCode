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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return null;
    }
    return recur(root.left, root.right);
};


function recur(leftNode: TreeNode | null, rightNode: TreeNode | null): boolean {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) return false;
    return recur(leftNode.left, rightNode.right) && recur(rightNode.left, leftNode.right);

}