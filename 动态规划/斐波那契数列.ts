// 动态规划的优化 -> 递推
function fib(n: number): number {
    if (n < 2) {
        return n;
    }
    let a = 0, b = 1, c = 1;
    for (let i = 2; i <= n; i++) {
        c = (a + b) % 1000000007;
        a = b;
        b = c;
    }
    return c;
};