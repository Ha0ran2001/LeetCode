/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	const begin = lowerBound(nums, nums.length, target)
	const end = upperBound(nums, nums.length, target)

	return begin === end ? [-1, -1] : [begin, end - 1]
}
const lowerBound = (nums, n, target) => {
	let left = 0,
		right = n
	while (left < right) {
		const mid = left + ((right - left) >> 1)
		if (nums[mid] < target) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left
}

const upperBound = (nums, n, target) => {
	let left = 0,
		right = n
	while (left < right) {
		const mid = left + ((right - left) >> 1)
		if (nums[mid] <= target) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left
}
// @lc code=end
