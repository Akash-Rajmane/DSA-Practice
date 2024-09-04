// Find the missing number in an array of 1 to N.

// Method 1
function missingNumber1(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
//TC: O(n)
//SC: O(1)

console.log(missingNumber1([1, 3, 2, 4, 6, 8, 7], 8));

// Method 2
function missingNumber2(arr, n) {
  let set = new Set(arr);
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
//TC: O(n)
//SC: O(n)

console.log(missingNumber2([1, 3, 2, 4, 6, 5, 7], 8));
