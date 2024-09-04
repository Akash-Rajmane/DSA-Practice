// Find the first non-repeating character in a string.

function firstNonRepeatingChar(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      charMap[str[i]]++;
    } else {
      charMap[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]] === 1) {
      return str[i];
    }
  }

  return "No non-repeating character exists!";
}
//TC: O(n)
//SC: O(n)
console.log(firstNonRepeatingChar("akashrajmane"));
console.log(firstNonRepeatingChar("dfdf"));

/*

More readable code 
function firstNonRepeatingChar(str) {
  let charMap = new Map();
  let order = [];

  // Traverse the string to populate charMap and order
  for (let char of str) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
      order.push(char);
    } else {
      charMap.set(char, charMap.get(char) + 1);
    }
  }

  // Find the first character in the order array that has a count of 1
  for (let char of order) {
    if (charMap.get(char) === 1) {
      return char;
    }
  }

  return "No non-repeating character exists!";
}

console.log(firstNonRepeatingChar("akashrajmane")); // Output: "k"
console.log(firstNonRepeatingChar("dfdf")); // Output: "No non-repeating character exists!"


*/
