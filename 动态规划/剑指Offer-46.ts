// 动态规划
function translateNum(num: number): number {
  let str = num.toString();
  const len = str.length;
  let dp = [1, 1];

  for (let i = 2; i <= len; i++) {
    let temp = Number(str[i - 2] + str[i - 1]);
    if (temp <= 9 || temp >= 26) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }

  return dp[len];
};


// 递归做法
function translateNum(num: number): number {
  const str = num.toString();

  const dfs = (str: string, pointer: number): number => {
    if (pointer >= str.length - 1) {
      return 1;
    }

    const temp = Number(str[pointer] + str[pointer + 1]);

    if (temp > 9 && temp < 26) {
      return dfs(str, pointer + 1) + dfs(str, pointer + 2);
    } else {
      return dfs(str, pointer + 1);
    }
  }

  return dfs(str, 0);
}