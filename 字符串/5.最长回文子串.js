/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let str = '#'
	for (const i of s) {
		str += `${i}#`
    }
	const n = str.length
	let j = -1,
		right = -1 // j: 回文中心 right：回文右半径
	const arr = [] // 记录最大回文半径
	let start = 0,
		end = -1
	for (let i = 0; i < n; i++) {
		let curArm = 0
		if (right >= i) {
			// 找对称点
			let curArmSemmetry = 2 * j - i
			let minArm = Math.min(arr[curArmSemmetry], right - i)
			curArm = expand(str, i - minArm, i + minArm)
		} else {
			// 暴力扩
            curArm = expand(str, i, i)
		}
		arr.push(curArm)
		if (i + curArm > right) {
			j = i
			right = i + curArm
		}
		if (2 * curArm + 1 > end - start) {
			start = i - curArm
			end = i + curArm
		}
	}
	let ans = ''
	for (let i = start; i <= end; i++) {
		if (str[i] != '#') {
			ans += str[i]
		}
    }

	return ans

	function expand(str, left, right) {
		while (left >= 0 && right < n && str[left] == str[right]) {
			left--
			right++
		}
		return (right - left - 2) >> 1
    }
}
// @lc code=end
