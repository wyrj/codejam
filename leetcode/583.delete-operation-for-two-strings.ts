/*
 * @lc app=leetcode id=583 lang=typescript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const table = Array.from(word1, () => Array.from(word2, () => 0))
  table[0][0] = word1[0] === word2[0] ? 0 : 2;
  for(let i = 1; i < word1.length; i++) {
    table[i][0] = word1[i] === word2[0] ? i : table[i - 1][0] + 1;
  }
  for (let j = 1; j < word2.length; j++) {
    table[0][j] = word1[0] === word2[j] ? j : table[0][j - 1] + 1;
  }
  for (let i = 1; i < word1.length; i++) {
    for (let j = 1; j < word2.length; j++) {
      table[i][j] = word1[i] === word2[j]
        ? table[i - 1][j - 1]
        : Math.min(table[i - 1][j], table[i][j - 1]) + 1;
    }
  }
  return table[word1.length - 1][word2.length - 1];
};
// @lc code=end

