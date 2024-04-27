const customMap = require('./map');
const customReduce = require('./reduce');

// Test customMap function
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Test customReduce function
const sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
