// 备忘录
let memo: number[][];

function numTrees(n: number): number {
  // 初始化备忘录
  memo = Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0));
  return count(1, n);
};

function count(start: number, end: number): number {
  // start > end 的情况为 null，也算一种
  if (start > end) return 1;
  // 查询备忘录
  if (memo[start][end] !== 0) {
    return memo[start][end];
  }

  let res: number = 0;
  for (let i = start; i <= end; i++) {
    let left: number = count(start, i - 1);

    let right: number = count(i + 1, end);

    res += left * right;
  }
  // 将结果存入备忘录
  memo[start][end] = res;

  return res;
}