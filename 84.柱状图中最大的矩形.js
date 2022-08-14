/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
	if (heights === null || heights.length === 0) return 0
	const t = [] // 存放下标
	let ans = 0
	for (let i = 0; i < heights.length; i++) {
		while (t.length && heights[t[t.length - 1]] >= heights[i]) {
			const j = t.pop()
			const left = t.length ? t[t.length - 1] : -1
			const area = (i - left - 1) * heights[j]
			ans = Math.max(ans, area)
		}
		t.push(i)
	}
	// 栈中剩下的元素，由于没有人能消除他们，因此，只能将结果设置为-1。
	// ! 全部出栈
	while (t.length) {
		const j = t.pop()
		const left = t.length ? t[t.length - 1] : -1
		const area = (heights.length - left - 1) * heights[j]
		ans = Math.max(ans, area)
	}
	return ans
}
// @lc code=end
