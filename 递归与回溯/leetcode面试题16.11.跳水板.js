/* 
解题思路：设短板为 i ，则长板为 k-i ，结果就为 shorter * i + longger * (k - i);
由于返回长度从小到大排列，所以 i 先从大的取 
*/


/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */

var divingBoard = function (shorter, longer, k) {
  if (k === 0) return [];
  if (shorter === longer) return [k * shorter];
  let res = [];
  for (let i = k; i >= 0; i--) {
    let shortCount = i;
    let longCount = k - i;
    let count = shorter * shortCount + longer * longCount;
    res.push(count);
  }
  return res;
}