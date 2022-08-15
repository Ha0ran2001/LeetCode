/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const kmp = (main, sub) => {
		// base case
		if (
			main === null ||
			sub === null ||
			sub.length < 1 ||
			main.length < sub.length
		) {
			return -1
		}

		let i = 0,
			j = 0

		const next = getNext(sub)

		while (i < main.length && j < sub.length) {
			if (main[i] === sub[j]) {
				i++
				j++
			} else {
				if (next[j] === -1) {
					// next数组已经跳无可跳，说明第一个字符都没匹配上 开始匹配下一个
					i++
				} else {
					j = next[j]
				}
			}
		}

		return j === sub.length ? i - j : -1
	}

	// 求最大前缀
	const getNext = str => {
		if (str.length === 1) {
			return [-1]
		}
		const next = Array(str.length)
		next[0] = -1
		next[1] = 0
		let i = 2
		let cn = 0 // 跳到的位置
		while (i < next.length) {
			if (str[i - 1] === str[cn]) {
				// 当前位置的前一个字符和跳到的位置相等
				next[i++] = ++cn // 说明cn位置前面所有+cn位置是 i位置的最大前缀
			} else if (cn > 0) {
				// 如果不是但是cn>0说明还可以跳
				cn = next[cn]
			} else {
				// 跳无可跳了
				next[i++] = 0
			}
		}
		return next
	}

	return kmp(haystack, needle)
}
// @lc code=end
