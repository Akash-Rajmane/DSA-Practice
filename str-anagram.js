// Check if two strings are anagrams.

// Method 1
function isAnagram1(a, b) {
  if (a.length !== b.length) return false;

  return [...a].sort().join("") === [...b].sort().join("");
}

console.log(isAnagram1("cat", "act"));
//TC: O(n log n)
//SC: O(n)

// Method 2
function isAnagram2(a, b) {
  if (a.length !== b.length) return false;

  const charCount = {};

  for (let char of a) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of b) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram2("cat", "tac"));
//TC: O(n)
//SC: O(n)
