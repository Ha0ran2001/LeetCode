/**
 * 模拟
 * 按照题目按层模拟，从左到右，从上到下，从右到左，从下到上这样就一层了，然后循环
 */


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let minNum = 1;
  const maxNum = n * n;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  // let res = [];
  // for (let i = 0; i < n; i++) {
  //     res[i] = []
  // }
  let res = new Array(n).fill(0).map(item => []); // 这样稍微快一点
  while (minNum <= maxNum) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res[top][i] = minNum;
      minNum++;
    }
    top++;
    //从上到下
    for (let i = top; i <= bottom; i++) {
      res[i][right] = minNum;
      minNum++;
    }
    right--;
    // 从右到左
    for (let i = right; i >= left; i--) {
      res[bottom][i] = minNum;
      minNum++;
    }
    bottom--;
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res[i][left] = minNum;
      minNum++;
    }
    left++;
  }
  return res;
};