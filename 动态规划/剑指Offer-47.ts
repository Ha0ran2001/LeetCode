function maxValue(grid: number[][]): number {
  const row = grid.length, column = grid[0].length;

  // 初始化行
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // 初始化列
  for (let j = 1; j < column; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[row - 1][column - 1];
};

console.log(maxValue([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
