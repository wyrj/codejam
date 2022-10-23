/*
 * @lc app=leetcode id=592 lang=typescript
 *
 * [592] Fraction Addition and Subtraction
 */

// @lc code=start
interface Fraction {
  numerator: number;
  denominator: number;
  length: number;
}
function fractionAddition(expression: string): string {
  function fromString(s: string): Fraction {
    if (s.length === 0) {
      return { numerator: 0, denominator: 1, length: 0 };
    }
    const [nu, de] = s.split('/');
    return {
      numerator: parseInt(nu ?? '0', 10),
      denominator: parseInt(de ?? '1', 10),
      length: s.length,
    };
  }
  function gcd(a: number, b: number): number {
    if (b > a) {
      return gcd(b, a);
    }
    if (b === 0) {
      return a;
    }
    if (a % b === 0) {
      return b;
    }
    return gcd(b, a - b);
  }
  function add(a: Fraction, b: Fraction): Fraction {
    const denominator = a.denominator / gcd(Math.abs(a.denominator), Math.abs(b.denominator)) * b.denominator;
    const numerator = (denominator / a.denominator * a.numerator) + (denominator / b.denominator * b.numerator);
    const g = gcd(Math.abs(numerator), Math.abs(denominator));
    return {
      numerator: numerator / g,
      denominator: denominator / g,
      length: a.length + b.length,
    };
  }
  function reducer(a: Fraction, b: Fraction, index: number): Fraction {
      const char = expression.charAt(a.length + index - 1);
      if (char === '-') {
        b.numerator = - b.numerator;
      }
      return add(a, b);
  }
  const result = expression
    .split(/[+-]/)
    .map(fromString)
    .reduce(reducer, fromString(''));
  return `${result.numerator}/${result.denominator}`;
};
// @lc code=end

fractionAddition('7/2+2/3-3/4');