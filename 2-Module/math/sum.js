function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc);
}

module.exports = sum;