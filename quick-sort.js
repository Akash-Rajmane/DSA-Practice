// Sort an array using quick sort.

/*
Quick Sort is a popular sorting algorithm that uses the "divide and conquer" approach. Here's how it works:

Choose a Pivot: Select an element from the array to act as the pivot. Common strategies include picking the last element, the first element, or a random element.

Partitioning: Rearrange the array so that:

All elements less than the pivot are moved to its left.
All elements greater than or equal to the pivot are moved to its right.
This step is crucial and can be done in-place.

Recursive Sorting: Recursively apply the same process to the sub-arrays (the elements left of the pivot and the elements right of the pivot).

Combine: Since the sub-arrays are sorted in-place, no additional combination step is needed. The array becomes sorted as the recursion unwinds.
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [8, 3, 1, 7, 0, 10, 2];
console.log(quickSort(arr));

// SC: O(n) out-of-place
// SC: O(log(n)) in-place
// TC: O(n2) worst case
// best & avg case O(nlog(n))
// unstable

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1); // Sort the left side
    quickSortInPlace(arr, pivotIndex + 1, right); // Sort the right side
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right]; // Choosing the last element as the pivot
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }

  // Place the pivot in the correct position
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}
