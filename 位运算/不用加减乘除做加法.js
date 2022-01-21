/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b !== 0) {
    const c = (a & b) << 1; // 进位
    a = a ^ b; // 非进位和
    b = c;
  }
  return a;
};