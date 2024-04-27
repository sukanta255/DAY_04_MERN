function rateLimiter(limit) {
    let count = 0;

    return function(func) {
        count++;
        if (count <= limit) {
            return func();
        } else {
            throw new Error('Rate limit exceeded');
        }
    };
}

module.exports = rateLimiter;
