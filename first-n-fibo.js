// Generate the first N Fibonacci numbers.

function firstNFiboNumbers(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let res = [0, 1];

  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res;
}
//TC : O(n)
//SC: O(n)

console.log(firstNFiboNumbers(10));
