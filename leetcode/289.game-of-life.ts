/*
 * @lc app=leetcode id=289 lang=typescript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const count = Array.from(board, () => new Array(board[0].length).fill(0));
  function getThree(i, j): number {
    const min = Math.max(j - 1, 0);
    const max = Math.min(j + 1, board[0].length - 1);
    return board[i].slice(min, max + 1).reduce((s, v) => s + v, 0);
  }
  for (let j = 0; j < board[0].length; j++) {
    count[0][j] = getThree(0, j);
    if (board.length > 1) {
      count[0][j] += getThree(1, j);
    }
  }
  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let c = count[i - 1][j];
      if (i >= 2) {
        c -= getThree(i - 2, j);
      }
      if (i < board.length - 1) {
        c += getThree(i + 1, j);
      }
      count[i][j] = c;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        if (count[i][j] === 3) {
          board[i][j] = 1;
        }
      } else {
        if (count[i][j] < 3 || count[i][j] > 4) {
          board[i][j] = 0;
        }
      }
    }
  }
};
// @lc code=end

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]);