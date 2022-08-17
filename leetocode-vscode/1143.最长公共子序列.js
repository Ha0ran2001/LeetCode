/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length,
		n = text2.length
	const dp = Array(m + 1)
		.fill()
		.map(() => Array(n + 1).fill(0))
	for (let i = 1; i <= m; i++) {
		const c1 = text1[i - 1]
		for (let j = 1; j <= n; j++) {
			const c2 = text2[j - 1]
			if (c1 === c2) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	// 打印最长公共子序列
	const s = []
	let length = dp[m][n]
	label: for (let i = m; i > 0; i--) {
		for (let j = n; j > 0; j--) {
			if (
				dp[i][j] === length &&
				dp[i][j] > dp[i][j - 1] &&
				dp[i][j] > dp[i - 1][j]
			) {
				length--
				s.unshift(text1[i - 1])
				if (length === 0) {
					break label
				}
				break
			}
		}
	}
	console.log(s.join(''))
	return dp[m][n]
}
// @lc code=end
