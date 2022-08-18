/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class LRUNode {
	constructor(key, val, next = null) {
		this.key = key
		this.val = val
		this.pre = null
		this.next = next
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.length = 0
		this.map = Object.create(null)
		this.head = null
		this.tail = null
	}

	get(key) {
		if (!(key in this.map)) {
			return -1
		}
		this.makeMostRecent(key) // 访问过的放在开头
		return this.map[key].val
	}

	put(key, value) {
		if (key in this.map) {
			this.map[key].val = value // 更新值
			this.makeMostRecent(key) // 访问过的放在开头
			return
		}
		if (this.length === this.capacity) {
			// 容量已满
			delete this.map[this.tail.key]
			if (this.head === this.tail) {
				// 说明只有一个节点 删了就没了
				this.head = null
				this.tail = null
			} else {
				// 更新末尾节点
				this.tail = this.tail.pre
				this.tail.next = null
			}
		} else {
			this.length++
		}

		const node = new LRUNode(key, value, this.head)

		if (this.head) {
			this.head.pre = node
		} else {
			this.tail = node
		}
		this.head = node
		this.map[key] = node
	}

	// 放在开头
	makeMostRecent(key) {
		const node = this.map[key]
		// 如果在开头就没必要了
		if (node !== this.head) {
			if (node.pre) {
				node.pre.next = node.next
			}
			if (node.next) {
				node.next.pre = node.pre
			}
			if (node === this.tail) {
				this.tail = node.pre
			}

			node.pre = null
			this.head.pre = node
			node.next = this.head
			this.head = node
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
