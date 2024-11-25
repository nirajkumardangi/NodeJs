function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc);
}

module.exports = product;