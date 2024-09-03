// Count the occurrences of each character in a string.

function freqCounter(str) {
  let freq = {};
  for (let char of str) {
    if (freq[char]) {
      freq[char] = freq[char] + 1;
    } else {
      freq[char] = 1;
    }
  }
  console.log(freq);
}

freqCounter("akash");

//TC: O(n)
//SC: O(n) worst case where all characters are unique
