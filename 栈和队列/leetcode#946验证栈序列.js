/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  for (let cur of pushed) {
    stack.push(cur);
    while (stack[stack.length - 1] === popped[0] && stack.length) {
      stack.pop();
      popped.shift();
    }
  }
  return !stack.length;
};