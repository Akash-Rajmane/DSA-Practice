// Implement binary search on a sorted array.

let arr = [1, 3, 5, 7, 15, 26, 30];
let target = 26;
function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      return m;
    }

    if (arr[m] > target) {
      r = m - 1;
    }

    if (arr[m] < target) {
      l = m + 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, target));

// TC: O(log(n))
// SC: O(1)
