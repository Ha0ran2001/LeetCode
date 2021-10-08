function coinChange(coins: number[], amount: number): number {
  let dp: number[] = Array(amount + 1).fill(Infinity);
  // base case
  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};