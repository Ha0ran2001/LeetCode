/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    if (k > arr.length) return arr;
    return quickSearch(arr, k, 0, arr.length - 1);
};

const quickSearch = (arr, k, left, right) => {
    let i = left, j = right;
    while (i < j) {
        while (i < j && arr[j] >= arr[left]) j--;
        while (i < j && arr[i] <= arr[left]) i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // 交换基准，因为 i > j 了
    [arr[i], arr[left]] = [arr[left], arr[i]];

    if (i > k) return quickSearch(arr, k, left, i - 1);
    if (i < k) return quickSearch(arr, k, i + 1, right);

    return arr.slice(0, k);
}