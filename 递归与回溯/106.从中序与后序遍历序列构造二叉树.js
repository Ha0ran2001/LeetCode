/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	const map = new Map()
	for (let i = 0; i < inorder.length; i++) {
		map.set(inorder[i], i)
	}
	let postIndex = postorder.length - 1

	const dfs = (inStart, inEnd) => {
		if (inStart > inEnd) {
			return null
		}
		const rootVal = postorder[postIndex]
		const root = new TreeNode(rootVal)
		const index = map.get(rootVal)
		postIndex--

		// 因为后续数组存储的是左子树 -> 右子树 -> 根节点
		// 所以从后续数组最后一个开始当根节点，先创建的是右子树
		root.right = dfs(index + 1, inEnd)
		root.left = dfs(inStart, index - 1)
		return root
	}

	return dfs(0, inorder.length - 1)
}
// @lc code=end
