// Find the length of the longest word in a string.

function lenOfLongestWord(sentence) {
  let words = sentence.split(" ");
  let maxLen = 0;
  for (let word of words) {
    if (maxLen < word.length) {
      maxLen = word.length;
    }
  }
  return maxLen;
}

console.log(
  lenOfLongestWord("Find the length of the longest word in a string")
);

//TC: O(n)
//SC: O(1)
