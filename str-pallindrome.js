// Check if a string is a palindrome.

//Method 1 : without using any array/string methods
function isPallindrome1(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let charFromLast = str[str.length - 1 - i];
    if (str[i] !== charFromLast) {
      return false;
    }
  }
  return true;
}
//TC : O(n)
//SC: O(1)

// Method2 : with array/string methods
function isPallindrome2(str) {
  return str === str.split("").reverse().join("");
}
//TC : O(n)
//SC: O(n)

console.log(isPallindrome1("aba"));
console.log(isPallindrome2("aba"));
