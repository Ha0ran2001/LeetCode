/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s === null || s.length <= 0) {
		return 0
	}
	const pos = {} // 存储每个字符的位置
	// 双指针-最长区间
	function maxLength(A) {
		let N = A.length
		// 区间的左指针
		let left = -1
		let ans = 0
		for (let i = 0; i < N; i++) {
			const index = A[i]
			// assert 在加入A[i]之前，(left, i-1]是一个合法有效的区间
			// step 1. 直接将A[i]加到区间中，形成(left, i]
			// step 2. 将A[i]加入之后，惰性原则
			while (left < i && pos[index] > left /*检查区间状态是否满足条件*/) {
				// 修改区间的状态
				left = pos[index]
			}
			pos[index] = i
			// assert 此时(left, i]必然满足条件
			ans = Math.max(ans, i - left)
		}
		return ans // 返回最优解
	}
	return maxLength(s)
}
// @lc code=end
