
// Implement a function that takes two numbers m and n and returns an array of 
// the first m multiples of the real number n. Assume that m is a positive integer.

function multiples(m, n) {
    const result = [];
    for (let i = 1; i <= m; i++) {
        result.push(i * n);
    }
    return result;
}