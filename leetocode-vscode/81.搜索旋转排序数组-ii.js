/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	if (nums === null || nums.length === 0) {
		return false
	}
	const n = nums.length
	if (n === 1) {
		if (nums[0] === target) {
			return true
		} else {
			return false
		}
	}
	let left = 0
	let right = n - 1
	while (left <= right) {
		const mid = (left + right) >> 1
		if (nums[mid] === target) {
			return true
		}
		if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
			// 分辨不出来左右哪个有序，就在right-1,left+1区间内继续找
			right--
			left++
		} else if (nums[left] <= nums[mid]) {
			if (nums[left] <= target && nums[mid] > target) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if (nums[n - 1] >= target && nums[mid] < target) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return false
}
// @lc code=end
