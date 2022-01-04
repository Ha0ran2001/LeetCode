/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0;
  nums.forEach((item) => {
    if (item === target) {
      count++;
    }
  })
  return count;
};