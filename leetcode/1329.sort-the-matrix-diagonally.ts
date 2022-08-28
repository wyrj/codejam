/*
 * @lc app=leetcode id=1329 lang=typescript
 *
 * [1329] Sort the Matrix Diagonally
 */

// @lc code=start
function diagonalSort(mat: number[][]): number[][] {
  const result: number[][] = Array.from(mat, () => []);
  for (let dIndex = -(mat.length - 1); dIndex < mat[0].length; dIndex++) {
    const arr: number[] = [];
    for (let col = Math.max(0, dIndex); col < mat[0].length; col++) {
      const row = col - dIndex;
      if (row >= mat.length) {
        break;
      }
      arr.push(mat[row][col]);
    }
    arr.sort((lhs, rhs) => lhs - rhs);
    for (let i = 0; i < arr.length; i++) {
      const col = Math.max(0, dIndex) + i;
      const row = col - dIndex;
      result[row][col] = arr[i];
    }
  }
  return result;
};
// @lc code=end

