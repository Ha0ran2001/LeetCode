/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if (nums === null || nums.length === 0) {
		return -1
	}
	let left = 0,
		right = nums.length - 1
	while (left < right) {
		const mid = (left + right) >> 1
		if (nums[mid] < nums[right]) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return nums[left]
}
// @lc code=end
