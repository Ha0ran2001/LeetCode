/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	const s = []
	const ans = []
	while (root !== null || s.length) {
		while (root !== null) {
			ans.push(root.val)
			s.push(root)
			root = root.left
		}
		root = s.pop()
		root = root.right
	}

	return ans
}
// @lc code=end
