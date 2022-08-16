/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	const N = chars === null ? 0 : chars.length
	let write = 0,
		left = 0
	for (let read = 0; read < N; read++) {
		if (read === N - 1 || chars[read] !== chars[read + 1]) {
			chars[write++] = chars[read]
			let num = read - left + 1 // 长度
			if (num > 1) {
				let anchor = write
				while (num > 0) {
					chars[write++] = '' + (num % 10)
					num = Math.floor(num / 10)
				}
				swap(chars, anchor, write - 1)
			}
			left = read + 1
		}
	}
	return write
}

const swap = (a, left, right) => {
	while (left < right) {
		;[a[left], a[right]] = [a[right], a[left]]
		left++
		right--
	}
}
// @lc code=end
