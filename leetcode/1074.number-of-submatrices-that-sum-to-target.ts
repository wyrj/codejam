/*
 * @lc app=leetcode id=1074 lang=typescript
 *
 * [1074] Number of Submatrices That Sum to Target
 */

// @lc code=start
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const reduce = Array.from(matrix, () => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === 0) {
        reduce[i][j] = matrix[i][j];
      } else {
        reduce[i][j] = matrix[i][j] + reduce[i][j - 1];
      }
    }
  }
  let result = 0;
  for (let startCol = 0; startCol < matrix[0].length; startCol++) {
    for (let endCol = startCol; endCol < matrix[0].length; endCol++) {
      const map = new Map<number, number>();
      let sum = 0;
      map.set(0, 1);
      for (let row = 0; row < matrix.length; row++) {
        sum += reduce[row][endCol] - (startCol > 0 ? reduce[row][startCol - 1] : 0);
        const count = map.get(sum - target) ?? 0;
        result += count;
        map.set(sum, (map.get(sum) ?? 0) + 1);
      }
    }
  }
  return result;
};
// @lc code=end

