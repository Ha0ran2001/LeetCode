/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) {
        return false
    }
    target.sort()
    arr.sort()
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false
        }
    }
    return true
};
// @lc code=end

