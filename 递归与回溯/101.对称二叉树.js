/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
	/* 层序遍历 */
	// if (root == null) {
	//     return true
	// }
	// const Q = [root]
	// while (Q.length) {
	//     let size = Q.length
	//     let arr = []
	//     while (size--) {
	//         const node = Q.shift()
	//         if (node == null) {
	//             arr.push(null)
	//             continue
	//         } else {
	//             arr.push(node.val)
	//         }
	//         if (node.left) {
	//             Q.push(node.left)
	//         } else {
	//             Q.push(null)
	//         }
	//         if (node.right) {
	//             Q.push(node.right)
	//         } else {
	//             Q.push(null)
	//         }
	//     }
	//     let i = 0, j = arr.length - 1
	//     while (i < j) {
	//         if (arr[i] != arr[j]) {
	//             return false
	//         }
	//         i++
	//         j--
	//     }
	// }
	// return true
	/* 递归 */
	return check(root, root)
	function check(p, q) {
		if (p == null && q == null) {
			return true
		} else if (p == null || q == null) {
			return false
		}
		return (
			p.val == q.val && check(p.left, q.right) && check(p.right, q.left)
		)
	}
}
// @lc code=end
