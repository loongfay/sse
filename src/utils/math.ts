/**
 * 两数相加
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 两数相减
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 两数相乘
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 两数相除
 * @throws 除数为零时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * 计算斐波那契数列第 n 项
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}
