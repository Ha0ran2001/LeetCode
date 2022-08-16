/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = []
	backTrack(nums, [], Array(nums.length).fill(false), res)
	return res
}

const backTrack = (nums, path, used, res) => {
	if (path.length === nums.length) {
		res.push(path)
		return
	}

	for (let i = 0; i < nums.length; i++) {
		if (used[i]) continue
		used[i] = true
		path.push(nums[i])
		backTrack(nums, path.slice(), used, res)
		used[i] = false
		path.pop()
	}
}

// @lc code=end
