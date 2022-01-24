/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    // const set = new Set();
    // let max = 0, min = 14;
    // for (let num of nums) {
    //   // * 大小王跳过
    //   if (num === 0) continue;
    //   max = Math.max(max, num);
    //   min = Math.min(min, num);
    //   // * 有重复的不能成为顺子
    //   if (set.has(num)) return false; 

    //   set.add(num);
    // }

    // return max - min < 5;

    let joker = 0;

    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0)
            joker++;
        else if (nums[i] === nums[i + 1])
            return false;
    }

    return nums[len - 1] - nums[joker] < 5;
};