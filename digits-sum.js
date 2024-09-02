// Find the sum of digits of a number.

function findSumOfDigits1(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}
//TC: O(log(n))  //10 pow d-1 <= n < 10 pow d  => d = ⌊log10(n)⌋+1
//SC: O(1)
findSumOfDigits1(123);

function findSumOfDigits2(num) {
  let numStr = num.toString();

  return [...numStr].reduce((acc, cur) => acc + +cur, 0);
}
//TC: O(log(n))
//SC: O(log(n))
console.log(findSumOfDigits2(123));
