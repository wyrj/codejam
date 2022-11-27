/*
 * @lc app=leetcode id=1926 lang=typescript
 *
 * [1926] Nearest Exit from Entrance in Maze
 */

// @lc code=start
function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  function isEmpty(row: number, col: number): boolean {
    return row >= 0 && row < m && col >= 0 && col < n && maze[row][col] === '.';
  }
  const visit = new Set<number>();
  const q: Array<{ step: number, row: number, col: number }> = [];
  function checkVisit(row: number, col: number, step: number): void {
    if (!isEmpty(row, col) || visit.has(row * 100 + col)) {
      return;
    }
    visit.add(row * 100 + col);
    q.push({ row, col, step: step + 1 });
  }
  q.push({ step: 0, row: entrance[0], col: entrance[1] });
  visit.add(entrance[0] * 100 + entrance[1]);
  for (let i = 0; i < q.length; i++) {
    const { step, row, col } = q[i];
    if (step > 0 && (row === 0 || row === m - 1 || col === 0 || col === n - 1)) {
      return step;
    }
    checkVisit(row - 1, col, step);
    checkVisit(row + 1, col, step);
    checkVisit(row, col - 1, step);
    checkVisit(row, col + 1, step);
  }
  return -1;
};
// @lc code=end
