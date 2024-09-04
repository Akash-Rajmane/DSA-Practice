// Rotate an array by N positions.

// method 1
function rotateArrByN(arr, n) {
  let len = arr.length;
  n = n % len; // Handle cases where n > arr.length

  // Step 1: Reverse the entire array
  reverse(arr, 0, len - 1);
  // Step 2: Reverse the first part (first N elements)
  reverse(arr, 0, n - 1);
  // Step 3: Reverse the remaining part
  reverse(arr, n, len - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

console.log(rotateArrByN([1, 2, 3, 4, 5, 6, 7], 3));
//TC: O(n)
//SC: O(1)

// Method 2
function rotateArray(arr, n) {
  let len = arr.length;
  n = n % len; // Handle cases where N > arr.length

  if (n === 0) return arr; // If N is 0, return the array as is

  let rotatedArr = arr.slice(len - n).concat(arr.slice(0, len - n));

  return rotatedArr;
}
//TC: O(n)
//SC: O(n)
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
