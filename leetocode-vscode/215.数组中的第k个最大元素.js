/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	return bfprt(nums, 0, nums.length - 1, k - 1)
}

const bfprt = (nums, begin, end, n) => {
	if (begin === end) {
		return nums[begin]
	}
	const pivot = medianOfMedians(nums, begin, end)
	const range = partition(nums, begin, end, pivot)
	if (n >= range[0] && n <= range[1]) {
		return nums[n]
	} else if (n < range[0]) {
		return bfprt(nums, begin, range[0] - 1, n)
	} else if (n > range[1]) {
		return bfprt(nums, range[1] + 1, end, n)
	}
}

const medianOfMedians = (nums, begin, end) => {
	let N = end - begin + 1
	const offset = N % 5 === 0 ? 0 : 1
	const len = Math.floor(N / 5) + offset
	const medianArr = Array(len).fill(0)
	for (let i = 0; i < len; i++) {
		let beginI = begin + i * 5
		let endI = beginI + 4
		medianArr[i] = getMedian(nums, beginI, Math.min(end, endI))
	}

	return bfprt(medianArr, 0, medianArr.length - 1, medianArr.length >> 1)
}

const getMedian = (nums, start, end) => {
	insertionSort(nums, start, end)
	const mid = start + ((end - start) >> 1)
	return nums[mid]
}

const insertionSort = (nums, start, end) => {
	for (let i = start; i <= end; i++) {
		for (let j = i; j > start; i--) {
			if (nums[j] < nums[j - 1]) {
				swap(nums, j, j - 1)
			} else {
				break // TODO why
			}
		}
	}
}

const partition = (nums, left, right, pivotValue) => {
	let small = left - 1
	let curr = left
	let big = right + 1
	while (curr !== big) {
		if (nums[curr] < pivotValue) {
			--big
			swap(nums, curr, big)
		} else if (nums[curr] > pivotValue) {
			++small
			swap(nums, small, curr)
			++curr
		} else {
			++curr
		}
	}
	return [small + 1, big - 1]
}

const swap = (arr, i, j) => {
	;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// @lc code=end
