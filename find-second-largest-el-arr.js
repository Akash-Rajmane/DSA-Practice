// Find the second largest element in an array.

function findSecondLargest1(arr) {
  if (arr.length <= 1) {
    console.log("Invalid Input");
    return;
  }
  let max = arr[0];
  let secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secMax) {
      secMax = arr[i];
    }
  }

  if (secMax === -Infinity) {
    console.log("No second max found");
  } else {
    console.log(secMax);
  }
}

//TC: O(n)
//SC: O(1)
findSecondLargest1([10, 10, 13, 15, -25, 13]);

function findSecondLargest2(arr) {
  // There should be at least two elements
  if (arr.length < 2) {
    console.log("Invalid Input");
    return;
  }

  // Sort the array in ascending order
  arr.sort();

  // Start from the second last element as
  // the largest element is at last
  for (let i = arr.length - 2; i >= 0; i--) {
    // If the element is not equal to the
    // largest element
    if (arr[i] !== arr[arr.length - 1]) {
      console.log("The second largest element is " + arr[i]);
      return;
    }
  }

  console.log("There is no second largest element");
}
//TC:O(n log n)
//SC: O(1)

findSecondLargest2([10, 10, 13, 15, -25, 13]);

function findSecondLargest3(arr) {
  // Create a Set to store unique elements
  const uniqueElements = new Set(arr);

  // Check if there are at least two unique elements
  if (uniqueElements.size < 2) {
    console.log("Invalid Input");
    return;
  }

  // Convert the Set back to an array and sort it
  const sortedUnique = Array.from(uniqueElements).sort((a, b) => a - b);

  // ans is the second-to-last element
  console.log(
    "The second largest element is " + sortedUnique[sortedUnique.length - 2]
  );
}
//TC:O(n log n)
//SC: O(n)
findSecondLargest3([10, 10, 13, 15, -25, 13]);
