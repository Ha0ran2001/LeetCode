/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
	const s = []
	const ans = []
	let pre = null
	while (s.length || root !== null) {
		while (root !== null) {
			s.push(root)
			root = root.left
		}
		root = s[s.length - 1]
		if (root.right === null || root.right === pre) {
			ans.push(root.val)
			s.pop()
			pre = root
			root = null
		} else {
			root = root.right
		}
	}
	return ans
}
// @lc code=end
