/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
        return s
    }
    let flag = -1
    const res = Array(numRows).fill('')
    let i = 0
    for (const str of s) {
        res[i] += str
        if (i === 0 || i == numRows - 1) {
            flag = -flag
        }
        i += flag
    }
    return res.join('')
};
// @lc code=end

