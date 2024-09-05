// Check if a number is a palindrome.

function isPallindrome(num) {
  let rem = 0,
    rev = 0;
  let n = num;

  while (n !== 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }

  return rev === num;
}

console.log(isPallindrome(123321));
//TC: O(log(n))  //10 pow d-1 <= n < 10 pow d  => d = ⌊log10(n)⌋+1
//SC: O(1)
