const PI = 3.14;

function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc);
}

// pattern 1
// module.exports = sum;

// pattern 2
// module.exports = { sum, PI };

// pattern 3
module.exports.sum = sum;
module.exports.PI = PI;