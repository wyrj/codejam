/*
 * @lc app=leetcode id=474 lang=typescript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  const table = Array.from(strs, () => Array.from({ length: m + 1}, () => new Array(n + 1).fill(0)));
  const count = strs.map(s => {
    let mCount = 0;
    let nCount = 0;
    for (const char of s) {
      if (char === '0') {
        mCount += 1;
      } else {
        nCount += 1;
      }
    }
    return { mCount, nCount }
  })
  for (let si = 0; si < strs.length; si++) {
    const { mCount, nCount } = count[si];
    for (let mi = 0; mi <= m; mi++) {
      for (let ni = 0; ni <= n; ni++) {
        let v = si === 0 ? 0 : table[si - 1][mi][ni];
        if (mi >= mCount && ni >= nCount) {
          v = Math.max(
            v,
            1 + (si > 0 ? table[si - 1][mi - mCount][ni - nCount] : 0),
          )
        }
        table[si][mi][ni] = v;
      }
    }
  }
  return table[strs.length - 1][m][n];
};
// @lc code=end

findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3);