/**
 同 荷兰国旗问题
 */


function sortColors(nums: number[]): void {
  partition(nums, 0, nums.length - 1, 1);
};

function partition(arr: number[], L: number, R: number, num: number) {
  let less = L - 1;
  let more = R + 1;
  let cur = L;
  while (cur < more) {
    if (arr[cur] < num) {
      swap(arr, ++less, cur++);
    } else if (arr[cur] > num) {
      swap(arr, --more, cur);
    } else {
      cur++;
    }
  }
}


function swap(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
