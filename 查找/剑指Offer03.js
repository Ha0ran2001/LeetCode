/**
 * @param {number[]} nums
 * @return {number}
 * 用 Set存储不重复的集合的特性，刚开始想到二重循环，太慢了
 */
var findRepeatNumber = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};