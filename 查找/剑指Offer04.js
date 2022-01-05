/**
 * 从右上角开始遍历，如果当前元素大于target，则列下标减一（往左找），小于则行下标加一（往下找）
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) {
        return false;
    }

    let row = 0, column = matrix[0].length - 1;
    while (row < matrix.length && column >= 0) {
        let num = matrix[row][column];
        if (num > target) {
            column--;
        } else if (num < target) {
            row++;
        } else {
            return num;
        }
    }
    return false;
}