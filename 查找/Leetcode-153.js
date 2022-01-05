/**
 * 
 * @param {number[]} nums
 * @return {number} 
 */

var findMin = function (nums) {
    if (!nums.length) {
        return;
    }
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let pivot = low + Math.floor((high - low) / 2); // 因为这里是high -low所以要加上low的下标
        if (nums[pivot] > nums[high]) {
            low = pivot + 1;
        } else {
            high = pivot;
        }
    }
    return nums[low];
}