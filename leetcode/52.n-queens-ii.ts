/*
 * @lc app=leetcode id=52 lang=typescript
 *
 * [52] N-Queens II
 */

// @lc code=start
function totalNQueens(n: number): number {
  const horizontle = new Array(n).fill(false);
  const slash = new Array(2 * n - 1).fill(false);
  const backslash = new Array(2 * n - 1).fill(false);
  const table: string[][] = Array.from({ length: n }, () => new Array(n).fill('.'));
  let count = 0;

  function recur(row: number): void {
    if (row === n) {
      count += 1;
      return;
    }
    for (let col = 0; col < n; col++) {
      const slashIndex = row + col;
      const backslashIndex = col - row + n - 1;
      if (horizontle[col] || slash[slashIndex] || backslash[backslashIndex]) {
        continue;
      }
      horizontle[col] = true;
      slash[slashIndex] = true;
      backslash[backslashIndex] = true;
      table[row][col] = 'Q';
      recur(row + 1);
      horizontle[col] = false;
      slash[slashIndex] = false;
      backslash[backslashIndex] = false;
      table[row][col] = '.';
    }
  }
  recur(0);
  return count;
};
// @lc code=end

