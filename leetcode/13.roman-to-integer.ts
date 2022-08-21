/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const record = [
    { code: 'M', n: 1000 },
    { code: 'CM', n: 900 },
    { code: 'D', n: 500 },
    { code: 'CD', n: 400 },
    { code: 'C', n: 100 },
    { code: 'XC', n: 90 },
    { code: 'L', n: 50 },
    { code: 'XL', n: 40 },
    { code: 'X', n: 10 },
    { code: 'IX', n: 9 },
    { code: 'V', n: 5 },
    { code: 'IV', n: 4 },
    { code: 'I', n: 1 },
  ]
  let ans = 0;
  for (const { code, n } of record) {
    while (s.length >= code.length && s.slice(0, code.length) === code) {
      ans += n;
      s = s.slice(code.length);
    }
  }
  return ans;
};
// @lc code=end

