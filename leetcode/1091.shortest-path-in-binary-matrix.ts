/*
 * @lc app=leetcode id=1091 lang=typescript
 *
 * [1091] Shortest Path in Binary Matrix
 */

// @lc code=start
function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] === 1) {
    return -1;
  }
  const n = grid.length;
  if (n === 1 && grid[0][0] === 0) {
    return 1;
  }
  const visitSet = new Set<number>([0]);
  let queue = [{ row: 0, col: 0 }];
  let step = 1;
  while (queue.length > 0) {
    step += 1;
    const nextQueue: typeof queue = [];
    for (const { row, col } of queue) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const hash = (row + i) * n + (col + j)
          if (
            (i === 0 && j === 0) ||
            visitSet.has(hash) ||
            (grid[row + i]?.[col + j] ?? 1) === 1
          ) {
            continue;
          }
          if (row + i === n - 1 && col + j === n - 1) {
            return step;
          }
          visitSet.add(hash);
          nextQueue.push({ row: row + i, col: col + j });
        }
      }
    }
    queue = nextQueue;
  }
  return -1;
};
// @lc code=end

