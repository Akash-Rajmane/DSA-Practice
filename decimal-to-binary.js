// Convert a number from decimal to binary.

function decimalToBinary(num) {
  if (num === 0) return "0";

  let binaryStr = "";
  while (num !== 0) {
    let rem = num % 2;
    binaryStr = rem + binaryStr; // prepending rem to binaryStr
    num = Math.floor(num / 2);
  }

  return binaryStr;
}

console.log(decimalToBinary(4));

// Using Bit Manipulation
function decimalToBinary2(num) {
  if (num === 0) return "0";

  let binaryStr = "";

  while (num > 0) {
    let bit = num & 1; // Extract the least significant bit using bitwise AND
    binaryStr = bit + binaryStr; // Prepend the bit to the binary string
    num = num >> 1; // Right shift the number by 1 to process the next bit
  }

  return binaryStr;
}

console.log(decimalToBinary2(5));

//TC: O(log(n))
//SC: O(log(n))

function decimalToBinary3(decimalNumber) {
  // Convert the decimal number to a binary string using toString with radix 2
  return decimalNumber.toString(2);
}

//TC: O(log(n))
//SC: O(log(n))
console.log(decimalToBinary2(5));
