// Find the GCD of two numbers.

function findGcd1(a, b) {
  let gcd = -1;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
    gcd = a;
  }
  return gcd;
}
//TC: O(n)
//SC: O(1)

console.log(findGcd1(48, 17));

function findGcd2(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
//TC: O(log(min(a,b)))
//SC: O(1)

console.log(findGcd2(18, 48));
