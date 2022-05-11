/*
 * @lc app=leetcode id=1641 lang=typescript
 *
 * [1641] Count Sorted Vowel Strings
 */

// @lc code=start
function countVowelStrings(n: number): number {
  const table: Array<[number, number, number, number, number]> = new Array(n);
  table[0] = [1, 2, 3, 4, 5];
  for (let i = 1; i < n; i++) {
    table[i] = [0, 0, 0, 0, 0];
    for (let j = 0; j < 5; j++) {
      let sum = 0;
      for (let k = 0; k <= j; k++) {
        sum += table[i - 1][k];
      }
      table[i][j] = sum;
    }
  }
  return table[n - 1][4];
};
// @lc code=end

