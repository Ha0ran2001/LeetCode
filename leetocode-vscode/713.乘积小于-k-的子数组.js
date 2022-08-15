/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	// 双指针-区间计数
	const maxLength = A => {
		const N = A.length
		// 区间的左指针
		let left = -1
		let ans = 0
		let m = 1
		for (let i = 0; i < N; i++) {
			m *= A[i]
			// assert 在加入A[i]之前，(left, i-1]是一个合法有效的区间
			// step 1. 直接将A[i]加到区间中，形成(left, i]
			// step 2. 将A[i]加入之后，惰性原则
			while (m >= k && left < i /*TODO 检查区间状态是否满足条件*/) {
				++left // 如果不满足条件，移动左指针
				m /= A[left]
			}
			// assert 此时(left, i]必然满足条件
			ans += i - left // 这是差别
		}
		return ans // 返回最优解
	}
	return maxLength(nums)
}
// @lc code=end
