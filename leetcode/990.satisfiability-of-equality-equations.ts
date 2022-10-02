/*
 * @lc app=leetcode id=990 lang=typescript
 *
 * [990] Satisfiability of Equality Equations
 */

// @lc code=start
function equationsPossible(equations: string[]): boolean {
  const base = 'a'.charCodeAt(0);
  const us = Array.from({ length: 26 }, (_, idx) => idx);
  function getN(n: number): number {
    if (us[n] === n) {
      return n;
    }
    return us[n] = getN(us[n]);
  }
  for (const eq of equations) {
    if (eq.charAt(1) !== '=') {
      continue;
    }
    const v1 = getN(eq.charCodeAt(0) - base);
    const v2 = getN(eq.charCodeAt(3) - base);
    const v = Math.min(v1, v2);
    us[v1] = v;
    us[v2] = v;
  }
  for (const eq of equations) {
    if (eq.charAt(1) !== '!') {
      continue;
    }
    const lhs = eq.charCodeAt(0) - base;
    const rhs = eq.charCodeAt(3) - base;
    if (getN(lhs) === getN(rhs)) {
      return false;
    }
  }
  return true;
};
// @lc code=end

