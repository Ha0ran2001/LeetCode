/**
 * 给定一个二维数组获取行列的长度：用 matrix.length 获取行的长度，用 matrix[0].length 获取列的长度
 * 和螺旋矩阵 2 一样，按层模拟，从左到右，从上到下，从右到左，从下到上这样就一层了
 * 由于行和列长度可能不一样，最后会出现不成环的情况，所以需要加一个退出条件，避免重复
 * 最后要么剩一行，要么剩一列
 * 剩一行一定是从左到右遍历的情况
 * 剩一列一定是从上到下遍历的情况
 * 所以需要在第二个for循环后写一个当res的长度等于matrix展开成一位数组的长度时退出循环
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let row = matrix.length;
  let col = matrix[0].length;
  let top = 0, bottom = row - 1;
  let left = 0, right = col - 1;
  let res = [];
  const total = row * col;
  while (res.length < total) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (res.length === total) break;
    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};