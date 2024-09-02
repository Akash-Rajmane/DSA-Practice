// Find the factorial of a number.

// Iterative Method
function findFactorial1(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
//TC : O(n)
//SC: O(1)
findFactorial1(4);

// Using Recursion
function findFactorial2(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * findFactorial2(n - 1);
}
//TC : O(n)

console.log(findFactorial2(4));
