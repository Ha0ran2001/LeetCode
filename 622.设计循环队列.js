/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
// i 的前一个 (i + 1) % capacity
// ! i 的后一个 (i - 1 + capacity) % capacity
// 因为 i = 0时前一个是5 不加 capacity就出错了
class MyCircularQueue {
	constructor(k) {
		this.capacity = k + 1
		this.a = Array(k + 1)
		this.front = 0 // 队列头部元素所在位置
		this.rear = 0 // 队列尾部 开闭原则 [front, rear)
	}

	enQueue(value) {
		if (this.isFull()) {
			return false
		}
		this.a[this.rear] = value // 元素放在rear(队尾)位置
		this.rear = (this.rear + 1) % this.capacity // rear向后移动
		return true
	}

	deQueue() {
		if (this.isEmpty()) {
			return false
		}
		this.front = (this.front + 1) % this.capacity
		return true
	}

	Front() {
		return this.isEmpty() ? -1 : this.a[this.front]
	}

	Rear() {
		// 因为用的开闭原则 [front, rear) 这个位置是空的
		let tail = (this.rear - 1 + this.capacity) % this.capacity
		return this.isEmpty() ? -1 : this.a[tail]
	}

	isEmpty() {
		return this.front === this.rear
	}

	isFull() {
		// rear 与 front 之间至少有一个空格
		// 当rear指向这最后一个空格时说明满了
		return (this.rear + 1) % this.capacity === this.front
	}
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
