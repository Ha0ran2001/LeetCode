/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
	const res = []
	let lremove = 0,
		rremove = 0

	for (let c of s) {
		if (c === '(') {
			lremove++
		} else if (c === ')') {
			if (lremove === 0) {
				rremove++
			} else {
				lremove--
			}
		}
	}
	backTrack(s, res, 0, lremove, rremove)
	return res
}

const backTrack = (s, res, start, lremove, rremove) => {
	if (lremove === 0 && rremove === 0) {
		if (isValid(s)) {
			res.push(s)
			return
		}
	}
	for (let i = start; i < s.length; i++) {
		if (i > start && s[i] === s[i - 1]) {
			continue
		}
		if (lremove + rremove > s.length - i) {
			return
		}
		// 去掉一个左括号
		if (lremove > 0 && s[i] === '(') {
			backTrack(
				s.substring(0, i) + s.substring(i + 1),
				res,
				i,
				lremove - 1,
				rremove
			)
		}
		if (rremove > 0 && s[i] === ')') {
			backTrack(
				s.substring(0, i) + s.substring(i + 1),
				res,
				i,
				lremove,
				rremove - 1
			)
		}
	}
}

const isValid = s => {
	let count = 0
	for (const c of s) {
		if (c === '(') {
			count++
		} else if (c === ')') {
			count--
			if (count < 0) {
				return false
			}
		}
	}
	return count === 0
}

// @lc code=end
