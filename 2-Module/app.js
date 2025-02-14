// const product = require('./math/product');
// const {sum, PI} = require('./math/sum');

// const sum = require('./math/sum');
// const PI = require('./math/sum');

const { sum, product, PI } = require('./math');

console.log('🚀 ~ product:', product(4, 5)); // 20
console.log('🚀 ~ sum:', sum(4, 5)); // 9
console.log('🚀 ~ PI:', PI); // 3.14

console.log(module.exports === exports); // true , 'export' shorthand refers to 'module.exports'.
