function maximum(a, b, c, d) {
  return Math.max(a, b, c, d);
}
console.log(maximum(1, 2, 3, 4));

function findMax(a, b, c, d) {
  let max = a;
  if (b > max) {
    max = b;
  } else if (c > max) {
    max = c;
  } else if (d > max) {
    max = d;
  }
  return max;
}
console.log(findMax(45, 33, 3, 5));
