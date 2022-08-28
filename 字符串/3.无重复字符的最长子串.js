/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s == null || s.length === 0) {
        return 0
    }
    let left = -1
    let ans = 0
    const pos = Array(256)
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i)
        
        while (left < i && pos[index] > left) {
            left = pos[index]
        }
        pos[index] = i

        ans = Math.max(ans, i - left)
    }
    return ans
};
// @lc code=end

