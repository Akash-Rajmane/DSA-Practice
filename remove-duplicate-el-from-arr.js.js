// Remove duplicate elements from an array.

// Method 1: using set data structure
function removeDuplicates1(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

console.log(removeDuplicates1([1, 2, 1, 4, 5, 1, 3, 2, 4, 2]));
//TC: O(n)
//SC: O(n)

// Method 2
function removeDuplicates2(arr) {
  let seen = {};
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicates2([1, 2, 1, 4, 5, 1, 3, 2, 4, 2]));
//TC: O(n)
//SC: O(n)
