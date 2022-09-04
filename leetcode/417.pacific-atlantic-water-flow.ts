/*
 * @lc app=leetcode id=417 lang=typescript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
enum OCEAN {
  NONE = 0,
  PACIFIC = 1,
  ATLANTIC = 2,
  BOTH = 3,
}
function pacificAtlantic(heights: number[][]): number[][] {
  const rowCount = heights.length;
  const colCount = heights[0].length;
  const ocean = Array.from(heights, () => new Array(colCount).fill(OCEAN.NONE));
  function calc(r: number, c: number, o: OCEAN): void {
    if ((ocean[r][c] & o) !== OCEAN.NONE) {
      return;
    }
    ocean[r][c] |= o;
    if (r > 0 && heights[r][c] <= heights[r - 1][c]) {
      calc(r - 1, c, o);
    }
    if (c > 0 && heights[r][c] <= heights[r][c - 1]) {
      calc(r, c - 1, o);
    }
    if (r < rowCount - 1 && heights[r][c] <= heights[r + 1][c]) {
      calc(r + 1, c, o);
    }
    if (c < colCount - 1 && heights[r][c] <= heights[r][c + 1]) {
      calc(r, c + 1, o);
    }
  }
  for (let r = 0; r < rowCount; r++) {
    calc(r, 0, OCEAN.PACIFIC);
    calc(r, colCount - 1, OCEAN.ATLANTIC);
  }
  for (let c = 0; c < colCount; c++) {
    calc(0, c, OCEAN.PACIFIC);
    calc(rowCount - 1, c, OCEAN.ATLANTIC);
  }

  const result: number[][] = [];
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      if (ocean[r][c] === OCEAN.BOTH) {
        result.push([r, c]);
      }
    }
  }
  return result;
};
// @lc code=end

pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);