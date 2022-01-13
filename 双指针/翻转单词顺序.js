/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let i = s.length - 1, j = i;
  let res = [];
  while (i >= 0) {
    while (i >= 0 && (s.charAt(i) !== ' ')) i--;
    res.push(s.substring(i + 1, j + 1) + ' ');
    while (i >= 0 && (s.charAt(i) === ' ')) i--;
    j = i;
  }
  return res.join('').trim();
};