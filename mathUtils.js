// Advanced mathematical functions for Cerebras AI testing
class MathUtils {
    
    /**
     * Calculate the factorial of a number
     * @param {number} n - The number to calculate factorial for
     * @returns {number} The factorial result
     */
    static factorial(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    /**
     * Check if a number is prime
     * @param {number} num - The number to check
     * @returns {boolean} True if prime, false otherwise
     */
    static isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    /**
     * Generate Fibonacci sequence up to n terms
     * @param {number} n - Number of terms to generate
     * @returns {number[]} Array of Fibonacci numbers
     */
    static fibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
        
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
    
    /**
     * Calculate the greatest common divisor
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} The GCD
     */
    static gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }
}

module.exports = MathUtils;