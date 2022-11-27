/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const set = new Set<number>();
  function foo(idx: number, row: number, col: number): boolean {
    const hash = row * n + col;
    if (board[row][col] !== word.charAt(idx) || set.has(hash)) {
      return false;
    }
    set.add(hash);
    if (
      idx === word.length - 1 ||
      (row > 0 && foo(idx + 1, row - 1, col)) ||
      (row < m - 1 && foo(idx + 1, row + 1, col)) ||
      (col > 0 && foo(idx + 1, row, col - 1)) ||
      (col < n - 1 && foo(idx + 1, row, col + 1))
    ) {
      return true;
    }
    set.delete(hash);
    return false;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (foo(0, r, c)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

