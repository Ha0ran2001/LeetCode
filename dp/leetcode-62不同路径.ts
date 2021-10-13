function uniquePaths(m: number, n: number): number {
  // 定义 dp[i][j] 是 i,j 位置时的路径总数
  let dp: number[][] = new Array(m + 1).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  // base case
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  // 找关系
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};