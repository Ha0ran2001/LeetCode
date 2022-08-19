/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (nums === null || nums.length === 0) {
		return -1
	}
	if (nums.length === 1) {
		if (nums[0] === target) {
			return 0
		} else {
			return -1
		}
	}
	const n = nums.length
	let left = 0
	let right = n - 1
	while (left <= right) {
		const mid = (right + left) >> 1
		if (nums[mid] === target) {
			return mid
		}
		if (nums[l] <= nums[mid]) {
			// [l, mid] 升序
			if (target >= nums[l] && target < nums[mid]) {
				right = mid - 1
			} else {
				// 不在这个范围里
				left = mid + 1
			}
		} else {
			// [mid, n - 1]升序
			if (target > nums[mid] && target <= nums[n - 1]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return -1
}
// @lc code=end
