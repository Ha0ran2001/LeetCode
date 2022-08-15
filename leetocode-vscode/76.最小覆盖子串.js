/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	if (s === null || t === null || s.length < t.length || t.length === 0) {
		return ''
	}
	const slen = s.length,
		tlen = t.length
	const bstat = Array(256).fill(0)
	let size = 0
	for (let i = 0; i < tlen; i++) {
		bstat[t.charCodeAt(i)]++
		if (bstat[t.charCodeAt(i)] === 1) {
			++size
		}
	}

	let equal = 0
	let left = -1
	let ans = slen + 1
	let start = 0
	const astat = Array(256).fill(0)
	for (let i = 0; i < slen; i++) {
		astat[s.charCodeAt(i)]++
		if (astat[s.charCodeAt(i)] === bstat[s.charCodeAt(i)]) {
			++equal
		}
		while (equal >= size) {
			if (ans > i - left) {
				ans = i - left
				start = left + 1
			}
			++left
			if (bstat[s.charCodeAt(left)] === astat[s.charCodeAt(left)]) {
				--equal
			}
			astat[s.charCodeAt(left)]--
		}
	}
	return ans <= slen ? s.substring(start, start + ans) : ''
}
// @lc code=end
