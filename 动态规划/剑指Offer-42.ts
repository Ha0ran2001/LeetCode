/**
 * 第 i 个的子数组的最大是第 i-1 的最大值 max1 和 max1+nums[i] 两者的最大值
 */
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  let dp: number[] = [];
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  const newDp = dp.sort((a, b) => b - a);
  return newDp[0];
};

/**
 * 使用 JavaScript 语言特性改写
 */

function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  const sum = nums.reduce((prev, cur) => {
    let sum = Math.max(cur, cur + prev);
    max = Math.max(sum, max);
    return sum;
  }, -Infinity);
  return Math.max(max, sum);
};

