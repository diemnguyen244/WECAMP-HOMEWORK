// Write a function to check if a string which consists of ()[]{} is valid or not
// E.g. [{}](): valid
// (()){}: valid
// )(){]: invalid

function isValid(str) {
  const stack = [];

  for (const c of str) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      console.log(stack);
    } else {
      const top = stack.pop();
      if (
        (c === ")" && top !== "(") ||
        (c === "}" && top !== "{") ||
        (c === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true
console.log(isValid("({})[]")); // true
console.log(isValid("(())]}")); // false
