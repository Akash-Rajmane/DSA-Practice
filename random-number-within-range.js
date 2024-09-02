// Generate a random number within a range.

// Math.random() generates a number between 0 (inclusive) and 1 (exclusive),

// To generate an integer (min & max inclusive)
function generateRandomNumber1(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber1(1, 2));

// To generate an integer (min inclusive & max exclusive)
function generateRandomNumber2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generateRandomNumber2(1, 3));

// To generate an integer (min exclusive & max inclusive)
function generateRandomNumber3(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

console.log(generateRandomNumber3(1, 3));

// To generate an integer (min & max exclusive)
function generateRandomNumber4(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max - min <= 1) {
    throw new Error(
      "No valid numbers between min and max with exclusive range"
    );
  }
  return Math.floor(Math.random() * (max - min - 1)) + min + 1;
}
console.log(generateRandomNumber4(1, 3));
