import { add, subtract, multiply, divide, fibonacci } from './math';

describe('Math utilities', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should return zero when multiplied by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(divide(1, 3)).toBeCloseTo(0.333, 3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('fibonacci', () => {
    it('should return 0 for n=0', () => {
      expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 for n=1', () => {
      expect(fibonacci(1)).toBe(1);
    });

    it('should return correct value for n=10', () => {
      expect(fibonacci(10)).toBe(55);
    });

    it('should throw error for negative input', () => {
      expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer');
    });
  });
});
