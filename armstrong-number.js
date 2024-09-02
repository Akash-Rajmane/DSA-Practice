// Check if a number is an Armstrong number

function isArmstrongNumber(num) {
  let sum = 0;
  let n = num;
  let digits = num.toString().length;
  while (n > 0) {
    let digit = n % 10;
    sum += Math.pow(digit, digits);
    n = Math.floor(n / 10);
  }
  return sum === num;
}
//TC: O(log(n))
//SC: O(1)
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(25));
console.log(isArmstrongNumber(1634));
