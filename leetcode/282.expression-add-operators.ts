/*
 * @lc app=leetcode id=282 lang=typescript
 *
 * [282] Expression Add Operators
 */

// @lc code=start
function addOperators(num: string, target: number): string[] {
  const ans: string[] = [];
  function foo(idx: number, formula: string, n: number, multi: number): void {
    if (idx === num.length) {
      if (n + multi === target) {
        ans.push(formula);
      }
      return;
    }
    const limit = num.charAt(idx) === '0' ? (idx + 1) : num.length;
    for (let i = idx; i < limit; i++) {
      const number = parseInt(num.slice(idx, i + 1), 10);
      if (idx === 0) {
        foo(i + 1, `${number}`, 0, number);
      } else {
        foo(i + 1, `${formula}+${number}`, n + multi, number);
        foo(i + 1, `${formula}-${number}`, n + multi, -number);
        foo(i + 1, `${formula}*${number}`, n, multi * number);
      }
    }
  }
  foo(0, '', 0, 0);
  return ans;
};
// @lc code=end
