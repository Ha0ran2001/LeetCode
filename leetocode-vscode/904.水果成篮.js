/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
	// 双指针-最长区间
	const maxLength = A => {
		const N = A.length
		// 区间的左指针
		let left = -1
		let ans = 0
		let map = new Map()
		for (let i = 0; i < N; i++) {
			map.set(A[i], (map.get(A[i]) || 0) + 1)

			while (map.size > 2 /*TODO 检查区间状态是否满足条件*/) {
				left++ // 如果不满足条件，移动左指针
				const old = A[left]
				map.set(old, map.get(old) - 1)
				if ((map.get(old) || 0) === 0) {
					map.delete(old)
				}
			}
			// assert 此时(left, i]必然满足条件
			ans = Math.max(ans, i - left)
		}
		return ans // 返回最优解
	}

	return maxLength(fruits)
}
// @lc code=end
