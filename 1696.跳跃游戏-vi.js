/*
 * @lc app=leetcode.cn id=1696 lang=javascript
 *
 * [1696] 跳跃游戏 VI
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxResult = function (nums, k) {
	if (nums === null || nums.length === 0 || k < 0) {
		return 0
	}

	// 非严格单调递减队列
	const Q = []

	for (let i = 0; i < nums.length; i++) {
		// 出队
		while (Q.length && i - Q[0].idx > k) {
			Q.shift()
		}

		if (Q.length === 0) {
			ans = nums[i]
		} else {
			ans = Q[0].sum + nums[i] // 因为维护的是单调递减队列，队首是最大的
		}

		// 入队
		while (Q.length && Q[Q.length - 1].sum <= ans) {
			Q.pop()
		}
		Q.push({ sum: ans, idx: i })
	}

	return ans
}
// @lc code=end
