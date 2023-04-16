function job(data) {
  return new Promise((resolve, reject) => {
    const num = parent(data);
    if (isNaN(num)) {
      reject("erro");
      return;
    }
    if (num % 2) {
      setTimeout(() => resolve("odd"), 1000);
      return;
    }
    setTimeout(() => resolve("even"), 2000);
  });
}
