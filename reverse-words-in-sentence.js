// Reverse the words in a sentence.

function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    reversedWords.push([...words[i]].reverse().join(""));
  }

  let result = reversedWords.join(" ");
  console.log(result);
}

reverseWords("Hello World");

//TC: O(n)
//SC: O(n)
