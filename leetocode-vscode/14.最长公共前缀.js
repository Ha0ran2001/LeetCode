/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs === null || strs.length === 0) {
		return ''
	}

	return strs.reduce((pre, cur) => {
		let i = 0
		while (pre[i] && cur[i] && pre[i] === cur[i]) {
			i++
		}
		return pre.substring(0, i)
	})
}
// @lc code=end
