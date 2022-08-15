/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	if (nums === null || nums.length === 0) {
		return 0
	}
	const N = nums.length
	let left = -1
	let ans = N + 1
	let sum = 0
	for (let i = 0; i < N; i++) {
		const x = nums[i]
		sum += x
		while (sum >= target) {
			ans = Math.min(ans, i - left)
			++left
			sum -= nums[left]
		}
	}
	return ans <= N ? ans : 0
}
// @lc code=end
