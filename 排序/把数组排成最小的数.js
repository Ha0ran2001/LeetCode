/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    // 如果只有一个元素，直接返回该元素
    if (nums.length < 2) return nums.join('');
    // 使用快速排序
    return quickSort(nums, 0, nums.length - 1).join('');
};

const quickSort = function (nums, left, right) {
    // partition过程返回的下标(满足条件的左边界)
    let index = partition(nums, left, right);

    if (left < index - 1) {
        quickSort(nums, left, index - 1);
    }

    if (index < right) {
        quickSort(nums, index, right);
    }

    return nums;
}

const partition = function (nums, l, r) {
    // 以中间值为基准，一个值 + 这个值 大于 这个值 + 一个值的放在右边， 小于的放在左边
    // 保证每个值的左边值加上这个值小于右边值加上自己
    const pivot = nums[l + r >> 1];

    while (l <= r) {
        // 找到左边值+自己 > 自己+左边值
        while ('' + nums[l] + pivot < '' + pivot + nums[l]) {
            l++;
        }

        while ('' + nums[r] + pivot > '' + pivot + nums[r]) {
            r--;
        }

        if (l <= r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

    return l;
}