/**
 * 用第两个栈，一个栈用来纯进栈，删除的时候把第一个栈里的元素往第二个栈里添加，
 * 然后返回第二个栈的栈顶元素，即第一个栈的栈底元素
 */

var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    return this.stack2.pop();
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.length ? this.stack2.pop() : -1;
  }
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/