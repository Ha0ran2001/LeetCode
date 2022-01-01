/**
 * 用两个栈，一个栈用来普通的进栈，第二个栈是元素单调递减的栈。即每次存放的都是比上一个小的元素
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stackA = [];
  this.stackB = [Infinity];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.stackA.push(x);
  const len = this.stackB.length;
  this.stackB.push(Math.min(this.stackB[len - 1], x));
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.stackA.pop();
  this.stackB.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  const len = this.stackA.length;
  return this.stackA[len - 1];
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  const len = this.stackB.length;
  return this.stackB[len - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/