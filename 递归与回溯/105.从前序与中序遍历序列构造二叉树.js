/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	const map = new Map()
	for (let i = 0; i < inorder.length; i++) {
		map.set(inorder[i], i)
	}

	const dfs = (preBegin, preEnd, inBegin, inEnd) => {
		// 前序遍历的数组遍历完了就结束
		if (preBegin > preEnd) {
			return null
		}
		const rootVal = preorder[preBegin] // 根节点
		const root = new TreeNode(rootVal) // 构建结点
        const index = map.get(rootVal) // 找到在中序数组中的位置
        const leftNum = index - inBegin
		root.left = dfs(preBegin + 1, preBegin + leftNum, inBegin, index - 1)
		root.right = dfs(preBegin + leftNum + 1, preEnd, index + 1, inEnd)
		return root
	}
	return dfs(0, preorder.length - 1, 0, inorder.length - 1)
}
// @lc code=end
