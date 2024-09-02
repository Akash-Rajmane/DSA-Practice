// Find the largest element in an array.

// Method 1: without any methods
function findLargestElement1(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

// Method 2: Math.max method
function findLargestElement2(arr) {
  console.log(Math.max(...arr));
}

findLargestElement1([2, 5, -2, 0, 10]);
findLargestElement2([2, 5, -2, 0, 10]);
