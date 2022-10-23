/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
  if (n === 1) {
    return '1';
  }
  const str = countAndSay(n - 1);
  const result: string[] = [];
  let last = str.charAt(0);
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === last) {
      count += 1;
    } else {
      result.push(`${count}`, last);
      last = char;
      count = 1;
    }
  }
  result.push(`${count}`, last);
  return result.join('');
};
// @lc code=end

