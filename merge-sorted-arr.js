// Merge two sorted arrays.

function mergeSortedArr(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  let result = [];
  let i = 0,
    j = 0;
  while (i < m && i < n) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < m) {
    result.push(arr1[i]);
    i++;
  }

  while (j < n) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArr([1, 2, 5, 7], [3, 5, 7, 9, 13, 15]));

//TC: O(m + n)
//SC: O(m + n)
