function getSmallestPos(arr) {
  pi = [...new Set(arr.sort((a, b) => a - b))];
  console.log(pi);

  for (i = 0; i < pi.length; i++) {
    if (pi[i] != i + 1) {
      return i + 1;
    }
  }
}

console.log(getSmallestPos([1, 2, 3]));
// console.log(getSmallestPos([8, 4, 3]));
// console.log(getSmallestPos([1, 99, 3]));
// console.log(getSmallestPos([100, 321, 33333]));
// console.log(getSmallestPos([23432423, 33, 33]));
// console.log(getSmallestPos([1, 2, 3]));
// console.log(getSmallestPos([1, 2, 3]));
