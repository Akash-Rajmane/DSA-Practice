// Find the union of two arrays.

function unionOfArr(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(unionOfArr([1, 4, 3, 8, 15, 2], [6, 9, 3, 2, 12, 4]));
//TC: O(n + m)
//SC: O(n + m)
