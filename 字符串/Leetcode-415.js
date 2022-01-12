/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // 从两个数的个位开始
  let x = num1.length - 1, y = num2.length - 1;
  // 进位
  let carry = 0;
  // 结果用数组存储
  let ans = [];

  while (x >= 0 || y >= 0) {
    // 当前下标大于等于0时说明有值，否则就当成0
    const i = x >= 0 ? Number(num1.charAt(x)) : 0;
    const j = y >= 0 ? Number(num2.charAt(y)) : 0;
    // 相加的结果
    const temp = i + j + carry;
    // 存储的结果要对 10 求模
    ans.unshift(temp % 10);

    carry = Math.floor(temp / 10);

    x -= 1;
    y -= 1;
  }
  // 最后如果进位还有值得再加上，也可以将这个放在 while 循环中
  if (carry !== 0) {
    ans.unshift(carry);
  }
  return ans.join('');
};