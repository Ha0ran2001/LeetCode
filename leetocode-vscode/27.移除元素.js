/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	// 未改变相对位置
	// let slow = 0
	// for (let fast = 0; fast < nums.length; fast++) {
	// 	if (val !== nums[fast]) {
	// 		nums[slow++] = nums[fast]
	// 	}
	// }
	// return slow
	// 改变了
	let left = 0,
		right = nums.length - 1

	while (left <= right) {
		while (left <= right && nums[left] !== val) {
			left++
		}
		while (left <= right && nums[right] === val) {
			right--
		}
		if (left < right) {
			nums[left++] = nums[right--]
		}
	}
	return left
}
// @lc code=end
