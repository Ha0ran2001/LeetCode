/**
 * @param {string} s
 * @return {number}
 */

//个人做法 用时比下面还少一点
var minAddToMakeValid = function (s) {
  let stack = [];
  let count = 0;
  for (let value of s) {
    switch (value) {
      case '(':
        stack.push(value);
        break;
      case ')':
        if (stack.pop() !== '(') count++;
        break;
    }
  }
  count = count + stack.length;
  return count;

};

// 别人的做法
var minAddToMakeValid = function (s) {
  let stack = [];
  if (!s.length) return 0;
  for (let value of s) {
    if (value === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(value);
    }
  }
  return stack.length;
};