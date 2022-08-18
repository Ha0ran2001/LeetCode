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
	// randomQuickSort(nums, 0, nums.length - 1) // 随机快排
	// 堆排序
	// let len = 0
	// const buildHeap = nums => {
	// 	len = nums.length
	// 	for (let i = len >> 1; i >= 0; i--) {
	// 		heapify(nums, i)
	// 	}
	// }

	// const heapify = (arr, i) => {
	// 	const left = 2 * i + 1 // 二叉树的左节点
	// 	const right = 2 * i + 2 // 二叉树的右节点
	// 	let largest = i

	// 	if (left < len && arr[left] > arr[largest]) {
	// 		largest = left
	// 	}
	// 	if (right < len && arr[right] > arr[largest]) {
	// 		largest = right
	// 	}
	// 	if (largest !== i) {
	// 		swap(arr, largest, i)
	// 		heapify(arr, largest)
	// 	}
	// }

	// const swap = (arr, i, j) => {
	// 	var temp = arr[i]
	// 	arr[i] = arr[j]
	// 	arr[j] = temp
	// }

	// buildHeap(nums)
	// for (let i = nums.length - 1; i > 0; i--) {
	// 	swap(nums, 0, i)
	// 	len--
	// 	heapify(nums, 0)
	// }
	// return nums
	const temp = []

	const mergeSort = (nums, begin, end) => {
		if (begin >= end || begin + 1 >= end) {
			return
		}

		const mid = begin + ((end - begin) >> 1)

		mergeSort(nums, begin, mid)
		mergeSort(nums, mid, end)

		let i = begin
		let j = mid
		let to = begin
		// 将两个子数组进行合并, 注意下面是一个很重要的模板
		while (i < mid || j < end) {
			if (j >= end || (i < mid && nums[i] < nums[j])) {
				temp[to++] = nums[i++]
			} else {
				temp[to++] = nums[j++]
			}
		}
		// 把合并的结果拷回原来的数组a[]
		for (let i = begin; i < end; i++) {
			nums[i] = temp[i]
		}
	}
	mergeSort(nums, 0, nums.length)
	return nums
}

// 随机快排
// const randomQuickSort = (nums, L, R) => {
// 	if (L < R) {
// 		const pos = randomPartition(nums, L, R)
// 		randomQuickSort(nums, L, pos[0] - 1)
// 		randomQuickSort(nums, pos[1] + 1, R)
// 	}
// }

// const randomPartition = (nums, L, R) => {
// 	const i = Math.floor(Math.random() * (R - L + 1)) + L
// 	const pivot = nums[i]
// 	return partition(nums, L, R, pivot)
// }

// const partition = (arr, l, r, pivot) => {
// 	let small = l - 1
// 	let curr = l
// 	let big = r + 1
// 	while (curr !== big) {
// 		if (arr[curr] < pivot) {
// 			small++
// 			swap(arr, curr, small)
// 			curr++
// 		} else if (arr[curr] > pivot) {
// 			big--
// 			swap(arr, curr, big)
// 		} else {
// 			curr++
// 		}
// 	}
// 	return [small + 1, big - 1]
// }

// const swap = (arr, i, j) => {
// 	;[arr[i], arr[j]] = [arr[j], arr[i]]
// }

// @lc code=end
