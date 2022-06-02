/*
 * @lc app=leetcode id=1461 lang=typescript
 *
 * [1461] Check If a String Contains All Binary Codes of Size K
 */

// @lc code=start
function hasAllCodes(s: string, k: number): boolean {
  const visit = new Set<number>();
  const mod = Math.pow(2, k - 1);
  let num = 0;
  for (let i = 0; i < k; i++) {
    num *= 2;
    if (s.charAt(i) === '1') {
      num += 1;
    }
  }
  visit.add(num);
  for (let i = k; i < s.length; i++) {
    num = (num % mod) * 2;
    if (s.charAt(i) === '1') {
      num += 1
    }
    visit.add(num);
  }
  return visit.size === mod * 2;
};
// @lc code=end

