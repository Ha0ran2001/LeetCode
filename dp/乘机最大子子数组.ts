function maxProduct(nums: number[]): number {
  let preMin: number = nums[0];
  let preMax: number = nums[0];
  let res: number = nums[0];
  let temp1: number = 0, temp2: number = 0;
  for (let i = 1; i < nums.length; i++) {
    temp1 = preMin * nums[i];
    temp2 = preMax * nums[i];
    preMin = Math.min(temp1, temp2, nums[i]);
    preMax = Math.max(temp1, temp2, nums[i]);

    res = Math.max(res, preMax);
  }

  return res
};