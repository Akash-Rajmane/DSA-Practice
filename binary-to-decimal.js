// Convert a number from binary to decimal.

function binaryToDecimal1(binaryStr) {
  let decimal = 0;
  let length = binaryStr.length;

  // Iterate through each bit of the binary string
  for (let i = 0; i < length; i++) {
    // Convert the character at index i to a number (0 or 1)
    let bit = parseInt(binaryStr[length - 1 - i]);

    // Add the bit value multiplied by 2 raised to the power of its position
    decimal += bit * Math.pow(2, i);
  }

  return decimal;
}

//TC: O(n);
//SC: O(1);

console.log(binaryToDecimal1("1010"));

function binaryToDecimal2(binaryStr) {
  const decimalNumber = parseInt(binaryStr, 2);

  return decimalNumber;
}
//TC: O(n);
//SC: O(1);
console.log(binaryToDecimal2("1010"));
