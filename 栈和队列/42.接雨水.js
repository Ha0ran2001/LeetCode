/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	const s = [] // 单调递减栈，存的是下标
	let ans = 0
	// 从左到右遍历
	// 维护一个单调递减栈
	for (let i = 0; i < height.length; i++) {
		// 大于栈顶元素，就弹栈
		while (s.length && height[i] > height[s[s.length - 1]]) {
			const top = s.pop()
			// 如果栈里仅剩的一个被弹了，直接跳过
			// 左边没有元素不满足可以接雨水
			if (!s.length) {
				break
			}
			const left = s[s.length - 1] // 弹掉栈顶后的栈顶元素
			const currentWidth = i - left - 1
			// min(height[i], height[left]) 是取左右边界高度的较小值
			// 减去 height[top] 是减去中间的高度
			const currentHeight =
				Math.min(height[i], height[left]) - height[top]
			ans += currentHeight * currentWidth
		}
		s.push(i)
	}
	return ans
}
// @lc code=end
