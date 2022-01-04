/**
 * 遍历
 * 魔幻的JavaScript，遍历居然比二分快
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
/**
 * 二分查找
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
var search = function (nums, target) {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] <= target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  let right = i;
  if (j >= 0 && nums[j] !== target) {
    return 0;
  }
  i = 0, j = nums.length - 1;
  // 查找左边界
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] > target) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  let left = j;
  return right - left - 1;
};

/**
 * 简化二分，变成target的右边界减去target - 1的右边界
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number}
 */
var search = function (nums, target) {
  return helper(nums, target) - helper(nums, target - 1);
};

function helper(nums, target) {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    if (nums[m] <= target) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return i;
}

let ans = search([5, 7, 7, 8, 8, 10], 8);
console.log(ans);