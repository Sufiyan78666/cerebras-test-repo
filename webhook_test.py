"""
Webhook Test File

This file was created to test the Cerebras AI webhook integration.
"""

import math


def test_webhook_integration():
    """
    Test function to validate webhook functionality
    """
    return "Webhook test successful!"


def calculate_advanced_math(x, y):
    """
    Advanced mathematical operations for testing
    """
    result = {
        'sum': x + y,
        'product': x * y,
        'power': x ** y,
        'log_sum': math.log(x + y) if x + y > 0 else 0
    }
    return result


def fibonacci_sequence(n):
    """
    Generate Fibonacci sequence up to n terms
    """
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence


def is_prime(num):
    """
    Check if a number is prime
    """
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True