/**
 * 同归并排序的 merge 过程
 * @param nums1 整数数组 1 & 合并后的数组
 * @param m nums.length
 * @param nums2 整数数组2
 * @param n nums2.length
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let help: number[] = [];
  let i = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < m && p2 < n)
    help[i++] = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];

  while (p1 < m)
    help[i++] = nums1[p1++];

  while (p2 < n)
    help[i++] = nums2[p2++];

  for (let i = 0; i < help.length; i++)
    nums1[i] = help[i];
};