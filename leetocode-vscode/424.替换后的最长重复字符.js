/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	// 双指针-最长区间
	function maxLength(A) {
		const N = A.length
		const cnt = Array(26).fill(0) // 记录字符出现的次数
		// 区间的左指针
		let left = -1
		let ans = 0
		let maxlen = 0 // 字符出现的最大次数
		for (let i = 0; i < N; i++) {
			const c = s.charCodeAt(i) - 'A'.charCodeAt(0)
			cnt[c]++
			maxlen = Math.max(maxlen, cnt[c])
			// assert 在加入A[i]之前，(left, i-1]是一个合法有效的区间
			// step 1. 直接将A[i]加到区间中，形成(left, i]
			// step 2. 将A[i]加入之后，惰性原则
			// 如果长度 大于 字符出现的最大次数 + 替换的个数
			if (i - left - maxlen > k) {
				left++
				const old = s.charCodeAt(left) - 'A'.charCodeAt(0)
				cnt[old]--
			}
			// assert 此时(left, i]必然满足条件
			ans = Math.max(ans, i - left)
		}
		return ans // 返回最优解
	}

	return maxLength(s)
}
// @lc code=end
