function numWays(n: number): number {
  if (n === 0) {
    return 1
  } else if (n === 1) {
    return n;
  }
  // 定义 dp[i] 为 i 有 dp[i] 种跳法
  let dp: number[] = new Array(n + 1).fill(0);
  // base case
  dp[0] = 1;
  dp[1] = 1;

  // 关系式
  for (let i = 2; i < dp.length; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};