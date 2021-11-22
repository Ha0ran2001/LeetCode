/** 双重循环，j从i+1开始走，确保i , j是两个不同的下标 */
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};