/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const blocks = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const n = board[i][j];
      if (n === '.') {
        continue;
      }
      const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i].has(n) || columns[j].has(n) || blocks[blockIndex].has(n)) {
        return false;
      }
      rows[i].add(n);
      columns[j].add(n);
      blocks[blockIndex].add(n);
    }
  }

  return true;
};
// @lc code=end

