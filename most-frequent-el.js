// Find the most frequent element in an array.

function mostFrequentElement(arr) {
  let freq = {};
  for (let el of arr) {
    if (freq[el]) {
      freq[el] = freq[el] + 1;
    } else {
      freq[el] = 1;
    }
  }

  let ans = arr[0];
  for (let el of arr) {
    if (freq[el] > freq[ans]) {
      ans = el;
    }
  }
  console.log(ans);
}

mostFrequentElement([1, 3, 41, 3, 56, 3, 4, 2, 1, 3, 4]);

//TC: O(n)
//SC: O(n) worst case where all characters are unique
