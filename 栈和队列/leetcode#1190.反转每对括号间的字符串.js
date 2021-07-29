/**
 * @param {string} s
 * @return {string}
 */

// 初始化一个栈。栈顶为 '', 当遇到 '(', 就压入一个 '', 遇到')'， 就弹出栈顶元素，并反转；都不是则将栈顶元素与字符拼接 

var reverseParentheses = function (s) {
  let stack = [''];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === '(') {
      stack.push('');
    } else if (ch === ')') {
      let str = stack.pop();
      let reverseStr = str.split('').reverse().join('');
      stack[stack.length - 1] += reverseStr;
    } else {
      stack[stack.length - 1] += ch;
    }
  }
  return stack.pop();
};