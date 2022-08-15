/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	const W = new Map()
	let wordLength = words[0].length
	for (let w of words) {
		W.set(w, (W.get(w) || 0) + 1)
	}
	const ans = []
	for (let start = 0; start < wordLength; start++) {
		const S = new Map()
		let left = start - wordLength
		let equalCount = 0
		let count = 0
		for (let i = start; i + wordLength <= s.length; i += wordLength) {
			const temp = s.substring(i, i + wordLength)
			S.set(temp, (S.get(temp) || 0) + 1)

			if (S.get(temp) === W.get(temp)) {
				++equalCount
			}

			++count
			if (count < words.length) {
				continue
			}

			if (equalCount === W.size) {
				ans.push(left + wordLength)
			}

			left += wordLength
			const rm = s.substring(left, left + wordLength)
			if (W.get(rm) === S.get(rm)) {
				--equalCount
			}
			S.set(rm, S.get(rm) - 1)
			if (S.get(rm) === 0) S.delete(rm)
		}
	}
	return ans
}
// @lc code=end
