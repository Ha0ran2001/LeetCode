/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const stack = []
	const a = s.split('')
	for (let i = 0; i < a.length; i++) {
		if (a[i] === '(') {
			stack.push(i)
		} else if (a[i] === ')') {
			if (stack.length === 0) {
				a[i] = '' // 移除该位置字符的方法
			} else {
				stack.pop()
			}
		}
	}
	for (let i = 0; i < stack.length; i++) {
		const char = stack[i]
		a[char] = ''
	}
	return a.join('')
}
// @lc code=end
