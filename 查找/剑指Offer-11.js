/**
 * 考虑重复元素情况，其他同leetcode-153
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let low = 0, high = numbers.length - 1;
    while (low < high) {
        let m = low + Math.floor((high - low) / 2);
        if (numbers[m] > numbers[high]) {
            low = m + 1;
        } else if (numbers[m] < numbers[high]) {
            high = m;
        } else {
            high -= 1;
        }
    }
    return numbers[low];
};