
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Invalid input";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
