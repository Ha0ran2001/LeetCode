/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 多数元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	if (nums === null || nums.length === 0) {
		return []
	}
	const n = nums.length
	let temp1 = null
	let vote1 = 0
	let temp2 = null
	let vote2 = 0

	// 找到那两个元素，因为答案有且只有两个
	for (let i = 0; i < n; i++) {
		if (vote1 > 0 && nums[i] === temp1) {
			vote1++
		} else if (vote2 > 0 && nums[i] === temp2) {
			vote2++
		} else if (vote1 === 0) {
			vote1++
			temp1 = nums[i]
		} else if (vote2 === 0) {
			vote2++
			temp2 = nums[i]
		} else {
			vote1--
			vote2--
		}
	}
	// 获取数量
	let cnt1 = 0
	let cnt2 = 0
	for (let i = 0; i < n; i++) {
		if (vote1 > 0 && nums[i] === temp1) {
			cnt1++
		} else if (vote2 > 0 && nums[i] === temp2) {
			cnt2++
		}
	}
	const len = Math.floor(n / 3)
	const ans = []
	if (cnt1 > len) {
		ans.push(temp1)
	}
	if (cnt2 > len) {
		ans.push(temp2)
	}
	return ans
}
// @lc code=end
