const counter = require('./counter');
const rateLimiter = require('./rate_limiter');

// Test counter function
const incrementCounter = counter();
console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2

// Test rate limiter function
const limitedFunction = rateLimiter(2);
const func = () => console.log('Function called');
limitedFunction(func); // Output: Function called
limitedFunction(func); // Output: Function called
// Trying to call function more than the limit
try {
    limitedFunction(func);
} catch (err) {
    console.error(err.message); // Output: Rate limit exceeded
}
