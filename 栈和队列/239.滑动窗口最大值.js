/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	// 非严格单调递减队列
	const Q = []

	const push = val => {
		// 如果是 >= 就变成了严格单调递减队列
		while (Q.length && Q[Q.length - 1] < val) {
			Q.pop()
		}

		Q.push(val) // 将元素入队
	}
	// 出队的时候，要相等的时候才会出队
	const pop = val => {
		if (Q.length && Q[0] === val) {
			Q.shift()
		}
	}

	const ans = []

	for (let i = 0; i < nums.length; i++) {
		push(nums[i])
		if (i < k - 1) {
			continue
		}
		ans.push(Q[0])
		pop(nums[i - k + 1])
	}

	return ans
}
// @lc code=end
