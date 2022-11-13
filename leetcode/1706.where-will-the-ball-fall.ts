/*
 * @lc app=leetcode id=1706 lang=typescript
 *
 * [1706] Where Will the Ball Fall
 */

// @lc code=start
enum DIR {
  UP,
  LEFT,
  RIGHT,
  DOWN,
}
function findBall(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;
  const map = {
    1: {
      [DIR.DOWN]: DIR.RIGHT,
      [DIR.RIGHT]: DIR.DOWN,
      [DIR.UP]: DIR.LEFT,
      [DIR.LEFT]: DIR.UP,
    },
    [-1]: {
      [DIR.DOWN]: DIR.LEFT,
      [DIR.LEFT]: DIR.DOWN,
      [DIR.UP]: DIR.RIGHT,
      [DIR.RIGHT]: DIR.UP,
    },
  }
  return Array.from({ length: n }, (_, idx) => {
    let row = 0;
    let col = idx;
    let dir = DIR.DOWN;
    while (row >= 0 && col >= 0 && row < m && col < n && dir !== DIR.UP) {
      dir = map[grid[row][col]][dir];
      switch (dir) {
        case DIR.UP:
          row -= 1;
          break;
        case DIR.DOWN:
          row += 1;
          break;
        case DIR.LEFT:
          col -= 1;
          break;
        case DIR.RIGHT:
          col += 1;
          break;
      }
    }
    return row === m ? col : -1;
  });
};
// @lc code=end

