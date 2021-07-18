var StockSpanner = function () {
  // 股票价
  this.stockPrice = [];
  // 跨度值
  this.stockSpanner = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function (price) {
  let count = 0;
  // 对首个价格进行处理，首个肯定返回 1
  if (this.stockSpanner.length === 0) {
    this.stockPrice.push(price);
    this.stockSpanner.push(1);
    return 1;
  }
  // 最后一位价格的下标
  let index = this.stockPrice.length - 1;
  // 循环向前，直到遇到比插入的价格更大的数
  while (price >= this.stockPrice[index] && index >= 0) {
    // 累加跨度值
    count += this.stockSpanner[index];
    // 下标按跨度值跳跃
    index -= this.stockSpanner[index];
  }
  // 加上新插入进来的价格的跨度值 1
  count++;
  // 把价格存起来
  this.stockPrice.push(price);
  // 跨度值存起来
  this.stockSpanner.push(count);
  return count;
};

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/


// 单调栈 
var StockSpanner = function () {
  this.stack = [];
  this.count = 0;
}

StockSpanner.prototype.next = function (price) {
  while (this.stack.length && price >= this.stack[this.stack.length - 1].value) {
    this.stack.pop();
  }
  let temp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
  this.count++;
  this.stack.push({
    index: this.count,
    value: price
  });
  return this.count - temp;
}