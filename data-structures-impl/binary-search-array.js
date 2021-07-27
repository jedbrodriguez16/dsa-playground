/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var pivot,
    left = 0,
    right = nums.length - 1;
  while (left <= right) {
    pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] == target) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
};

var arr = [-1, 9, 3, 12, 0, 5];

//sort asc
arr.sort(function (a, b) {
  return a - b;
});
// arr = [-1,0,3,5,9,12];

console.log(search(arr, 9));
