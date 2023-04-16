function filterArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr.filter((word) => word !== "ken");
}
console.log(filterArr(["john", "ken", "david", "ken"]));
