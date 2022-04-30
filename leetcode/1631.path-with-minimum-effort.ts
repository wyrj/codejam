/*
 * @lc app=leetcode id=1631 lang=typescript
 *
 * [1631] Path With Minimum Effort
 */

// @lc code=start
function minimumEffortPath(heights: number[][]): number {
  const rowCount = heights.length;
  const colCount = heights[0].length;
  function canReach(effort: number): boolean {
    const footprint = new Set<number>([0]);
    const queue = [{ row: 0, col: 0 }];
    while (queue.length > 0) {
      const { row, col } = queue.shift() as { row: number, col: number };
      if (row === rowCount - 1 && col === colCount - 1) {
        return true;
      }
      const address = row * colCount + col;
      const h = heights[row][col]
      if (
        row > 0 &&
        !footprint.has(address - colCount) &&
        Math.abs(h - heights[row - 1][col]) <= effort
      ) {
        footprint.add(address - colCount);
        queue.push({ row: row - 1, col });
      }
      if (
        row < rowCount - 1 &&
        !footprint.has(address + colCount) &&
        Math.abs(h - heights[row + 1][col]) <= effort
      ) {
        footprint.add(address + colCount);
        queue.push({ row: row + 1, col });
      }
      if (
        col > 0 &&
        !footprint.has(address - 1) &&
        Math.abs(h - heights[row][col - 1]) <= effort
      ) {
        footprint.add(address - 1);
        queue.push({ row, col: col - 1 });
      }
      if (
        col < colCount - 1 &&
        !footprint.has(address + 1) &&
        Math.abs(h - heights[row][col + 1]) <= effort
      ) {
        footprint.add(address + 1);
        queue.push({ row, col: col + 1 });
      }
    }
    return false;
  }
  let max = 0;
  let min = 1e6;
  for (const row of heights) {
    for (const n of row) {
      max = Math.max(max, n);
      min = Math.min(min, n);
    }
  }
  let low = 0;
  let high = max - min;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (canReach(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
// @lc code=end

