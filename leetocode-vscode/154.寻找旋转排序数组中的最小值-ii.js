/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
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
	let left = 0
	let right = nums.length - 1
	while (left < right) {
		const mid = (right + left) >> 1
		if (nums[mid] < nums[right]) {
			right = mid
		} else if (nums[mid] > nums[right]) {
			left = mid + 1
		} else {
			right--
		}
	}
	return nums[left]
}
// @lc code=end
