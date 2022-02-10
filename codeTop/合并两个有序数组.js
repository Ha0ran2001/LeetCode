/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// * 双指针法
var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0;
  let sorted = new Array(m + n).fill(0);
  let cur = 0;

  while (p1 <= m && p2 <= n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }

    sorted[p1 + p2 - 1] = cur;
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
};

// * 逆向双指针
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  let tail = m + n - 1;
  let cur;

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      // nums1 走完了
      cur = nums2[p2--];
    } else if (p2 === -1) {
      // nums2 走完了
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      // 大的值放后面
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }

    nums1[tail--] = cur;
  }
};
