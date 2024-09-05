// Find the square root of a number without using the built-in function.

function sqrt(num, precision = 1e-10) {
  if (num < 0) {
    throw new Error("Cannot compute square root of a negative number");
  }

  if (num === 0) {
    return 0;
  }

  let low = 0;
  let high = num;
  let mid;

  while (high - low > precision) {
    mid = (low + high) / 2;
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}

console.log(sqrt(2));
//TC: O(log n)
//SC: O(1)
