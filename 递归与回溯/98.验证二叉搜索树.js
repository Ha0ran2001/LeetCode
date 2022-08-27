/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
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
 * @return {boolean}
 */
var isValidBST = function (root) {
	/* 递归 */
    // return helper(root, -Infinity, Infinity)
	// function helper(root, lower, upper) {
	// 	if (root == null) {
	// 		return true // 遍历这里都没有返回false说明该路径都满足
	// 	}
	// 	if (root.val >= upper || root.val <= lower) {
	// 		return false
	// 	}
	// 	return (
	// 		helper(root.left, lower, root.val) &&
	// 		helper(root.right, root.val, upper)
	// 	)
	// }
    /* 中序遍历 */
    if (root == null) {
        return false
    }
    const stack = []
    let pre = -Infinity
    while (stack.length || root != null) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.val <= pre) {
            return false
        }
        pre = root.val
        root = root.right
    }
    return true
}
// @lc code=end
