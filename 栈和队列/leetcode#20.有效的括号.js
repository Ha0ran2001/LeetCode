/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let temp = [];
  if (s.length % 2 === 1) return false;
  for (let item of s) {
    switch (item) {
      case '(':
      case '{':
      case '[':
        temp.push(item);
        break;
      case ')':
        if (temp.pop() !== '(') return false;
        break;
      case '}':
        if (temp.pop() !== '{') return false;
        break;
      case ']':
        if (temp.pop() !== '[') return false;
        break;
    }
  }
  return !temp.length;
};