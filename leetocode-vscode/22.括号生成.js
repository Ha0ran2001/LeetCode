/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const list = []
	backTrack(list, [], 0, 0, n)
	return list
}

const backTrack = (list, str, open, close, max) => {
	if (str.length === 2 * max) {
		list.push(str.join(''))
		return
	}
	if (open < max) {
		str.push('(')
		backTrack(list, str.slice(), open + 1, close, max)
		str.pop()
	}
	if (close < open) {
		str.push(')')
		backTrack(list, str.slice(), open, close + 1, max)
		str.pop()
	}
}
// @lc code=end
