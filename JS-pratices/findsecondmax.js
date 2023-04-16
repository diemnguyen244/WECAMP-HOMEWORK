//find the 2 maximum number of an array
function findthe2maxNum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const newArr = [...new Set(arr)].sort((a, b) => a - b);
  console.log(newArr);
  return newArr[newArr.length - 2];
}
console.log(findthe2maxNum([1, 543, 3, 0, 56]));

console.log(findthe2maxNum([5, 4, 6, 9]));
console.log(findthe2maxNum([1, 1, 1, 1]));
console.log(findthe2maxNum([1, 2, 3, 3]));
