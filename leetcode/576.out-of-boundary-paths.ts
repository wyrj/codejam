/*
 * @lc app=leetcode id=576 lang=typescript
 *
 * [576] Out of Boundary Paths
 */

// @lc code=start
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  const dp = new Map<string, number>();
  function recursive(r: number, c: number, move: number): number {
    const hash = `${r},${c},${move}`;
    let count = dp.get(hash);
    if (count === undefined) {
      if (move === 1) {
        count =
          (r === 0 ? 1 : 0) +
          (c === 0 ? 1 : 0) +
          (r === m - 1 ? 1 : 0) +
          (c === n - 1 ? 1 : 0);
      } else {
        count =
          (r > 0 ? recursive(r - 1, c, move - 1) : 0) +
          (c > 0 ? recursive(r, c - 1, move - 1) : 0) +
          (r < m - 1 ? recursive(r + 1, c, move - 1) : 0) +
          (c < n - 1 ? recursive(r, c + 1, move - 1) : 0);
      }
      count = count % (1e9 + 7);
      dp.set(hash, count);
    }
    return count;
  }
  let result = 0;
  for (let i = 1; i <= maxMove; i++) {
    result = (result + recursive(startRow, startColumn, i)) % (1e9 + 7);
  }
  return result;
};
// @lc code=end
