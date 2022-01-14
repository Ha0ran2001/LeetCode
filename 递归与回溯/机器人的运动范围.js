/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0;
  let obj = {};

  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;

    const sum = (i + '' + j).split('').reduce((prev, cur) => +prev + +cur);

    let axis = JSON.stringify([i, j]);

    if (sum <= k && !obj[axis]) {
      res++;
      obj[axis] = true;

      dfs(i, j + 1);
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j - 1);
    }
  }

  dfs(0, 0);

  return res;
};