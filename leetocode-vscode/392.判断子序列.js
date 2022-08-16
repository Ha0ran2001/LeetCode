/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	const dp = Array(s.length + 1)
		.fill(0)
		.map(() => Array(t.length + 1).fill(0))
	for (let i = 1; i <= s.length; i++) {
		for (let j = 1; j <= t.length; j++) {
			if (s[i - 1] !== t[j - 1]) {
				dp[i][j] = dp[i][j - 1]
			} else {
				dp[i][j] = dp[i - 1][j - 1] + 1
			}
		}
	}
	return dp[s.length][t.length] === s.length
}
// @lc code=end
