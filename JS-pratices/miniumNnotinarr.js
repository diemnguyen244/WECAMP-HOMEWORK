function miniumNum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let mini = 1;
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number > 0) {
      if (number > mini) {
        return mini;
      } else {
        mini = number + 1;
      }
    }
  }
  return mini;
}

function miniumNum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let mini = 1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === mini) mimi += 1;
  }
  return mini;
}

console.log(miniumNum([1, 2, 3]));
console.log(miniumNum([8, 4, 3]));
console.log(miniumNum([1, 99, 3]));
console.log(miniumNum([100, 321, 33333]));
console.log(miniumNum([23432423, 33, 33]));
console.log(miniumNum([1, 2, 3]));
console.log(miniumNum([0, 2, 3]));
console.log(miniumNum([1, 3, 4]));

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit in digits) {
  console.log(digit);
}
const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const valueindex of digits) {
  console.log(valueindex);
}
