/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	if (nums === null || nums.length === 0) {
		return -1
	}
	let count = 0
	let target = null
	for (let i = 0; i < nums.length; i++) {
		if (count === 0) {
			target = nums[i]
		}
		if (nums[i] === target) {
			count++
		} else {
			count--
		}
	}
	return target
}
// @lc code=end
