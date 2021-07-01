/**
 * 枚举
 * 先求出 low 和 high 的字符串的长度，就是枚举的范围
 * 起点最小值是 1，最大值是 10-len，比如[100, 300], 枚举的长度 len 是 3, 起点最大值是 7，顺次数为 789，大于 300，不符合要求。后面的也就不用再枚举了
 */


/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function (low, high) {
  let lowLen = low.toString().length;
  let highLen = high.toString().length;
  let res = [];
  for (let i = lowLen; i <= highLen; i++) {
    for (let j = 1; j <= 10 - i; j++) {
      let str = '';
      let num = j;
      let k = i - 1;
      str += num;
      while (k--) {
        num++;
        str += num;
      }
      let ans = parseInt(str);
      if (ans >= low && ans <= high) {
        res.push(ans);
      }
    }
  }
  return res;
};