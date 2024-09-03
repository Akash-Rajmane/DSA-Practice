// Sort an array using merge sort.

/*
    Algorithm

MergeSort(arr[], l,  r)
If r > l
1. Find the middle point to divide the array into two halves:  
        middle m = l+ (r-l)/2
2. Call mergeSort for first half:   
        Call mergeSort(arr, l, m)
3. Call mergeSort for second half:
        Call mergeSort(arr, m+1, r)
4. Merge the two halves sorted in step 2 and 3:
        Call merge(arr, l, m, r)



Time Complexity of Merge Sort = O(nlogn)
Space Complexity of Merge Sort = O(n)

Out-of-Place
Stable

Drawbacks of Merge Sort

Slower comparative to the other sort algorithms for smaller tasks.
Merge sort algorithm requires an additional memory space of 0(n) for the temporary array.
It goes through the whole process even if the array is sorted

*/

let arr = [3, 4, 1, 5, 8];
let n = arr.length;

function mergeSort(arr, l, r) {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let L = [];

  let n2 = r - m;
  let R = [];

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let k = l;
  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

mergeSort(arr, 0, n - 1);
console.log(arr);
