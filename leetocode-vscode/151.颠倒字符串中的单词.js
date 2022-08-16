/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	s = Array.from(s)
	removeExtraSpaces(s)
	console.log(s, s.length)
	reverse(s, 0, s.length - 1)
	let start = 0
	for (let i = 0; i <= s.length; i++) {
		if (i === s.length || s[i] === ' ') {
			reverse(s, start, i - 1)
			start = i + 1
		}
	}
	return s.join('')
}

const removeExtraSpaces = s => {
	let slow = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== ' ') {
			if (slow !== 0) s[slow++] = ' '
			while (i < s.length && s[i] !== ' ') {
				s[slow++] = s[i++]
			}
		}
	}
	s.length = slow
}

const reverse = (s, start, end) => {
	let i = start,
		j = end
	while (i < j) {
		;[s[i], s[j]] = [s[j], s[i]]
		i++
		j--
	}
}
// @lc code=end
