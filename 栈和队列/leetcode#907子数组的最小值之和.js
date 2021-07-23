/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const mod = 1e9 + 7;
  const len = arr.length;
  // pre[]，next[]都是单调栈解法中维护的一个栈
  let [pre, next] = [[], []];
  // left[] 表示左边比 arr[i] 小的值距离 arr[i] 的距离
  // right[] 表示右边比 arr[i] 小的值距离 arr[i] 的距离
  let [left, right] = [[], []];
  for (let i = 0; i < len; i++) {
    while (pre.length && arr[pre[pre.length - 1]] >= arr[i]) {
      pre.pop();
    }
    // pre[pre.length - 1] 这个栈顶元素表示 比arr[i]小的元素的下标
    left[i] = pre.length ? i - pre[pre.length - 1] : i + 1;
    pre.push(i);

    let j = len - 1 - i;
    // 取大于号避免重复
    while (next.length && arr[next[next.length - 1]] > arr[j]) {
      next.pop();
    }
    right[j] = next.length ? next[next.length - 1] - j : len - j;
    next.push(j);
  }
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i] * left[i] * right[i];
    sum %= mod;
  }
  return sum;
};