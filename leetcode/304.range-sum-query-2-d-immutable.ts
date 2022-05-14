/*
 * @lc app=leetcode id=304 lang=typescript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
class NumMatrix {
  private sum: number[][];

  constructor(matrix: number[][]) {
    this.sum = [];
    for (let r = 0; r < matrix.length; r++) {
      this.sum[r] = [];
      for (let c = 0; c < matrix[r].length; c++) {
        let sum = matrix[r][c];
        if (r > 0) {
          sum += this.sum[r - 1][c];
        }
        if (c > 0) {
          sum += this.sum[r][c - 1];
        }
        if (r > 0 && c > 0) {
          sum -= this.sum[r - 1][c - 1];
        }
        this.sum[r][c] = sum;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = this.sum[row2][col2];
    if (row1 > 0) {
      sum -= this.sum[row1 - 1][col2];
    }
    if (col1 > 0) {
      sum -= this.sum[row2][col1 - 1];
    }
    if (row1 > 0 && col1 > 0) {
      sum += this.sum[row1 - 1][col1 - 1];
    }
    return sum;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

const nm = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
]);
nm.sumRegion(1, 1, 2, 2);