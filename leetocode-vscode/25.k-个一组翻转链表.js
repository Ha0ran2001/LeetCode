/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
	let temp = new ListNode(-1)
	let tempTail = temp
	let ans = new ListNode(-1)
	let ansTail = ans
	let index = 0

	const reverse = head => {
		let dummy = new ListNode(-1)
		let p = head
		while (p !== null) {
			const back = p.next
			p.next = dummy.next
			dummy.next = p
			p = back
		}
		return dummy.next
	}

	const append = (head, k) => {
		tempTail.next = head
		tempTail = tempTail.next
		index++
		if (index === k) {
			let tail = temp.next
			let h = reverse(temp.next)
			ansTail.next = h
			ansTail = tail
			index = 0
			temp.next = null
			tempTail = temp
		}
	}

	let p = head
	while (p !== null) {
		const back = p.next
		p.next = null
		append(p, k)
		p = back
	}

	if (index > 0) {
		ansTail.next = temp.next
		ansTail = tempTail
	}

	return ans.next
}

// @lc code=end
