/*
 * @lc app=leetcode id=948 lang=typescript
 *
 * [948] Bag of Tokens
 */

// @lc code=start
function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((lhs, rhs) => lhs - rhs);
  let score = 0;
  let maxScore = score;
  let addIndex = 0;
  let abstractIndex = tokens.length - 1;
  while (addIndex <= abstractIndex) {
    if (power >= tokens[addIndex]) {
      power -= tokens[addIndex];
      addIndex += 1;
      score += 1;
      maxScore = Math.max(score, maxScore);
    } else if (score > 0) {
      power += tokens[abstractIndex];
      abstractIndex -= 1;
      score -= 1;
    } else {
      break;
    }
  }
  return maxScore;
};
// @lc code=end

