/*
 * @lc app=leetcode.cn id=845 lang=javascript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
	// 双指针-最长区间
	const maxLength = A => {
		const N = A.length
		// 区间的左指针
		let left = -1
		let preVal = A[0] // 前一个值
		let ans = 0
		const Status = {
			onlyOne: -1, // 只有一个元素
			up: 0, // 上升状态
			down: 1, // 下降状态
		}

		let status = Status.onlyOne // 当前的状态

		for (let i = 1; i < N; i++) {
			const x = A[i]
			if (status === Status.onlyOne) {
				if (x > preVal) {
					status = Status.up
				} else {
					left = i - 1
				}
			} else {
				if (status === Status.up) {
					if (x === preVal) {
						status = Status.onlyOne
						left = i - 1
					} else if (x < preVal) {
						status = Status.down
					}
				} else {
					if (x === preVal) {
						status = Status.onlyOne
						left = i - 1
					} else if (x > preVal) {
						status = Status.up
						left = i - 2
					}
				}
			}
			preVal = x
			// assert 此时(left, i]必然满足条件
			if (status === Status.down) {
				ans = Math.max(ans, i - left)
			}
		}
		return ans // 返回最优解
	}
	return maxLength(arr)
}
// @lc code=end
