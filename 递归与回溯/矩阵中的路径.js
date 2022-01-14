/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const [m, n] = [board.length, board[0].length];

  const dfs = (i, j, index) => {
    // 越界情况或不相等情况
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }
    // 临时存储
    const temp = board[i][j];
    // 设置为空字符，防止向四个方向递归的时候重复访问到
    board[i][j] = '';

    // 向四个方向递归
    const res =
      dfs(i, j + 1, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j - 1, index + 1);

    // 恢复
    board[i][j] = temp;

    return res;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};