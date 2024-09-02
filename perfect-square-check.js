// Check if a number is a perfect square.

// using Math.sqrt & Math.floor
function isPerfectSquare1(num) {
  if (num < 0) return false;

  let sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}
//TC: O(1);
//SC: O(1);

console.log(isPerfectSquare1(25));

// Without methods
function isPerfectSquare2(num) {
  if (num < 0) return false;
  let i = 0;
  while (i * i < num) {
    i++;
  }
  return i * i === num;
}
//TC: O(√n);
//SC: O(1);

console.log(isPerfectSquare2(25));

// Without Methods (using Binary Search)
function isPerfectSquare3(num) {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let left = 1,
    right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
//TC: O(log(n));
//SC: O(1);

console.log(isPerfectSquare3(25));
