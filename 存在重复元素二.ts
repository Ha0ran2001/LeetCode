function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    // 如果有重复的就返回 true，因为set里面的元素个数肯定是会小于等于k，在k个元素内有重复元素就返回true
    if (set.has(nums[i])) {
      return true;
    }
    // 没有，就添加元素
    set.add(nums[i]);
    // 如果元素个数大于k了，就把倒数k个前面的元素删掉。
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  // 如果在 k 个元素没找到重复的元素就返回false
  return false;
};