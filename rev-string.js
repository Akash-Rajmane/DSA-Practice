// Reverse a string.

//Method 1 : without using any array/string methods
function revString1(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);
}
//TC : O(n)
//SC: O(n)

// Method 2: using array.reduceRight method
function revString2(str) {
  let reversedStr = [...str].reduceRight((acc, curr) => acc + curr, "");
  console.log(reversedStr);
}
//TC : O(n)
//SC: O(n)

// Method 3: using array.split & reverse method
function revString3(str) {
  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
}
//TC : O(n)
//SC: O(n)

revString1("akash");
revString2("akash");
revString3("akash");
