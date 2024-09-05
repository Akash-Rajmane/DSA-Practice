// Calculate the power of a number (a^b).

function power(a, b) {
  if (b === 0) return 1; // Base case: a^0 = 1
  if (b < 0) return 1 / power(a, -b); // Handle negative exponents

  // Recursive case: Exponentiation by Squaring
  if (b % 2 === 0) {
    let half = power(a, b / 2);
    return half * half;
  } else {
    return a * power(a, b - 1);
  }
}

//console.log(power(3, 3));
//console.log(power(2, -3));

//TC: O(log b)
//SC: O(log b)

// Method 2
function power2(a, b) {
  if (b === 0) return 1;
  if (b === 1) return a;

  let ans = 1;
  let exp = Math.abs(b);

  // Multiply ans by a, exp/2 times
  for (let i = 1; i <= Math.floor(exp / 2); i++) {
    ans *= a;
  }

  // Handle the case for even and odd exponents
  if (b % 2 === 0) {
    ans *= ans; // Square ans for even powers
  } else {
    ans = a * ans * ans; // Multiply by 'a' once more for odd powers
  }

  // Handle negative exponent
  return b < 0 ? 1 / ans : ans;
}

console.log(power2(2, -3));
console.log(power2(2, 3));
//TC: O(b)
//SC: O(1)
