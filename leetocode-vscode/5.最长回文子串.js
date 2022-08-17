/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 马拉车分两种情况
// 1. i 在回文内
// 2. i 在回文外 —— 暴力扩
var longestPalindrome = function (s) {
	if (s === null || s.length === 0) {
		return ''
	}
	const str = ['#']
	for (let i = 0; i < s.length; i++) {
		str.push(s[i])
		str.push('#')
	}
	const newStr = str.join('')
	const N = newStr.length
	let j = -1 // 回文中心
	let right = -1 // 回文右端点
	const a = []
	let start = 0,
		end = 0
	for (let i = 0; i < N; i++) {
		let currArm = 0
		if (i <= right) {
			// i + x = 2 * j
			const currSymmetry = 2 * j - i
			const minArm = Math.min(a[currSymmetry], right - i)
			currArm = expand(newStr, i - minArm, i + minArm)
		} else {
			currArm = expand(newStr, i, i)
		}
		a.push(currArm)

		if (i + currArm > right) {
			j = i
			right = i + currArm
		}

		if (2 * currArm + 1 > end - start) {
			start = i - currArm
			end = i + currArm
		}
	}

	const ans = []
	for (let i = start; i <= end; i++) {
		if (newStr[i] !== '#') {
			ans.push(newStr[i])
		}
	}
	return ans.join('')
}

const expand = (newStr, left, right) => {
	const n = newStr.length
	while (left >= 0 && right < n && newStr[left] === newStr[right]) {
		--left
		++right
	}
	return (right - left - 2) >> 1
}
// @lc code=end
