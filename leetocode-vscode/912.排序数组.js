/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	if (nums === null || nums.length === 0) {
		return []
	}
	randomQuickSort(nums, 0, nums.length - 1)
	return nums
}

const randomQuickSort = (nums, L, R) => {
	if (L < R) {
		const pos = randomPartition(nums, L, R)
		randomQuickSort(nums, L, pos[0] - 1)
		randomQuickSort(nums, pos[1] + 1, R)
	}
}

const randomPartition = (nums, L, R) => {
	const i = Math.floor(Math.random() * (R - L + 1)) + L
	const pivot = nums[i]
	return partition(nums, L, R, pivot)
}

const partition = (arr, l, r, pivot) => {
	let small = l - 1
	let curr = l
	let big = r + 1
	while (curr !== big) {
		if (arr[curr] < pivot) {
			small++
			swap(arr, curr, small)
			curr++
		} else if (arr[curr] > pivot) {
			big--
			swap(arr, curr, big)
		} else {
			curr++
		}
	}
	return [small + 1, big - 1]
}

const swap = (arr, i, j) => {
	;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// @lc code=end
