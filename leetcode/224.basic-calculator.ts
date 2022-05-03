/*
 * @lc app=leetcode id=224 lang=typescript
 *
 * [224] Basic Calculator
 */

// @lc code=start
enum TOKEN_TYPE {
  ADD,
  SUB,
  LEFT_PA,
  RIGHT_PA,
  NUMBER,
}
type Token<T extends TOKEN_TYPE = TOKEN_TYPE> = T extends TOKEN_TYPE.NUMBER ? { type: T, value: number } : { type: T, value?: never };

function calculate(s: string): number {
  function *tokenize(str: string): Generator<Token> {
    let i = 0;
    const zero = '0'.charCodeAt(0);
    while (i < str.length) {
      const char = str.charAt(i);
      if (char === '+') {
        yield { type: TOKEN_TYPE.ADD };
      } else if (char === '-') {
        yield { type: TOKEN_TYPE.SUB };
      } else if (char === '(') {
        yield { type: TOKEN_TYPE.LEFT_PA };
      } else if (char === ')') {
        yield { type: TOKEN_TYPE.RIGHT_PA };
      } else if (char !== ' ') {
        const start = i;
        while (i + 1 < str.length && str.charCodeAt(i + 1) >= zero && str.charCodeAt(i + 1) <= zero + 9) {
          i++;
        }
        const value = parseInt(str.slice(start, i + 1), 10);
        yield { type: TOKEN_TYPE.NUMBER, value };
      }
      i++;
    }
  }
  let ans = 0;
  const stack: Token[] = [];
  function pushNumber(n: number): void {
    if (stack.length >= 2 && stack[stack.length - 1].type === TOKEN_TYPE.ADD) {
      stack.pop();
      n = <number>(<Token>stack.pop()).value + n;
    } else if (stack.length >= 1 && stack[stack.length - 1].type === TOKEN_TYPE.SUB) {
      stack.pop();
      if (stack.length >= 1 && stack[stack.length - 1].type === TOKEN_TYPE.NUMBER) {
        n = <number>(<Token>stack.pop()).value - n;
      } else {
        n = -n;
      }
    }
    stack.push({ type: TOKEN_TYPE.NUMBER, value: n });
  }
  for (const token of tokenize(s)) {
    if (
      token.type === TOKEN_TYPE.ADD ||
      token.type === TOKEN_TYPE.SUB ||
      token.type === TOKEN_TYPE.LEFT_PA
    ) {
      stack.push(token);
    } else if (token.type === TOKEN_TYPE.NUMBER) {
      pushNumber(token.value);
    } else if (token.type === TOKEN_TYPE.RIGHT_PA) {
      const v = <number>(<Token>stack.pop()).value;
      stack.pop();
      pushNumber(v);
    }
  }
  return <number>stack[0].value;
};
// @lc code=end
