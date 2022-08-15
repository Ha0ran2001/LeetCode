/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1 === null || s2 === null || s1.length > s2.length) {
		return false
	}
	const len1 = s1.length,
		len2 = s2.length
	let m1 = new Map(),
		m2 = new Map()
	for (let i = 0; i < len1; i++) {
		m1.set(s1[i], (m1.get(s1[i]) || 0) + 1)
	}
	let equal = 0
	let left = -1
	for (let i = 0; i < len2; i++) {
		let x = s2[i]
		m2.set(x, (m2.get(x) || 0) + 1)
		if (m1.get(x) === m2.get(x)) {
			++equal
		}

		if (i - left < len1) {
			continue
		}

		if (equal === m1.size) {
			return true
		}

		++left
		let y = s2[left]
		if (m1.get(y) === m2.get(y)) {
			// 进到这里面说明这个字符虽然相等但是已经不能用了
			--equal
		}
		m2.set(y, m2.get(y) - 1)
	}
	return false
}
// @lc code=end
