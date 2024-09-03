// Find the LCM of two numbers.

function findGcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLcm(a, b) {
  return Math.abs(a * b) / findGcd(a, b);
}

//TC: O(log(min(a,b))) overall
//SC: O(1)

let num1 = 12;
let num2 = 48;
console.log(findLcm(num1, num2));
