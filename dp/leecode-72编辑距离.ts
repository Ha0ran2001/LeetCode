function minDistance(word1: string, word2: string): number {
  // 定义 dp[i][j] 为 word1长度为 i, word2长度为 j时的最少操作数
  const m = word1.length, n = word2.length;
  let dp: number[][] = new Array(m + 1).fill(0);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  // base case word1或者word2长度为 0
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  // 找关系
  // 如果word1[i]和word2[j]一样，就不做任何操作，进行下面 dp[i - 1][j - 1]
  // 如果word1[i]和word2[j]不一样，就进行三种操作：
  // 1. 如果是替换：dp[i][j] = dp[i - 1][j - 1] + 1
  // 2. 如果是在word1末尾插入一个和word2[j]相同的元素, dp[i][j] = dp[i][j - 1] + 1
  // 3. 如果是把wrod1[i]删除，则 dp[i][j] = dp[i - 1][j] + 1

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }

    }
  }

  return dp[m][n];
};