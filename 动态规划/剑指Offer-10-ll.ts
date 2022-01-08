function numWays(n: number): number {
    let a = 1, b = 1, sum;
    for (let i = 0; i < n; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
};