// Find the intersection of two arrays.

function findIntersectionOfArr(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter((item) => set.has(item));
}

console.log(findIntersectionOfArr([1, 4, 3, 2], [3, 2, 12, 4, 5, 8]));

//TC: O(Max(arr1.length,arr2.length))
//SC: O(n)
