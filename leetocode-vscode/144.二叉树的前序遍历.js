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
	const res = []
	let cur = root,
		morrisRight = null
	while (cur !== null) {
		morrisRight = cur.left
		if (morrisRight !== null) {
			while (morrisRight.right !== null && morrisRight.right !== cur) {
				morrisRight = morrisRight.right
			}
			if (morrisRight.right === null) {
				res.push(cur.val)
				morrisRight.right = cur
				cur = cur.left
				continue
			} else {
				morrisRight.right === null
			}
		} else {
			res.push(cur.val)
		}
		cur = cur.right
	}
	return res
}
// @lc code=end
