/** js 线性表初始化没找到，感觉就是数组了 */

/**
 * 初始化以及创建
 * 因为 js 是动态的所以根本不需要 malloc 这些
 */
let sqlist = [1, 2, 3, 4, 5];

/**
 * 插入
 * 从后往前遍历，前一个值赋给后一个值
 * @param {number} location 要插入的位置
 * @param {number} element 要插入的元素
 */
function listInsert(location, element) {
  for (let k = sqlist.length - 1; k >= location - 1; k--) {
    sqlist[k + 1] = sqlist[k];
  }
  sqlist[location - 1] = element;
}

/**
 * @param {number} pos 要删除的位置
 */
function listDelete(pos) {
  if (k < 1 || k > sqlist.length) {
    throw new Error('Error operation');
  }
  for (let k = pos - 1; k < sqlist.length; k++) {
    sqlist[k] = sqlist[k + 1];
  }
  sqlist.length--; // 避免最后一位出现 undefined
}

/**
 * 
 * @param {number} element 要查找的元素
 * @returns {number}
 */
function listSearch(element) {
  for (let i = 0; i < sqlist.length; i++) {
    if (sqlist[i] === element) {
      return i + 1;
    }
  }
  return -1;
}

