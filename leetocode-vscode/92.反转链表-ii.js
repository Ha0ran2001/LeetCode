/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
	let dummy = new ListNode(-1, head)
	let pre = dummy
	for (let i = 0; i < left - 1; i++) {
		pre = pre.next
	}
	let cur = pre.next
	for (let i = left; i < right; i++) {
		let next = cur.next
		cur.next = next.next
		next.next = pre.next
		pre.next = next
	}
	return dummy.next
}
// var reverseBetween = function (head, left, right) {
// 	if (head === null || right < left) {
// 		return head
// 	}
// 	let dummy = new ListNode(-1, head)
// 	let preLeftNode = dummy
// 	for (let i = 0; i < left - 1; i++) {
// 		preLeftNode = preLeftNode.next
// 	}
// 	let rightNode = preLeftNode
// 	for (let i = 0; i < right - left + 1; i++) {
// 		rightNode = rightNode.next
// 	}
// 	let begin = preLeftNode.next
// 	let end = rightNode.next
// 	let h = reverse(begin, end)
// 	preLeftNode.next = h
// 	begin.next = end
// 	return dummy.next
// }

// const reverse = (begin, end) => {
// 	let dummy = new ListNode(-1)
// 	let p = begin
// 	while (p !== end) {
// 		const back = p.next
// 		p.next = dummy.next
// 		dummy.next = p
// 		p = back
// 	}
// 	return dummy.next
// }
// @lc code=end
