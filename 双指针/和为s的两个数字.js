/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0, j = nums.length - 1;
  while (i < j) {
    const s = nums[i] + nums[j];
    if (s > target) {
      j--;
    } else if (s < target) {
      i++;
    } else {
      return [nums[i], nums[j]];
    }
  }
};