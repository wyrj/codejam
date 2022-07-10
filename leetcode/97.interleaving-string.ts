/*
 * @lc app=leetcode id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const table = new Array(s2.length + 1).fill(false);
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        table[j] = true;
      } else if (i === 0) {
        table[j] = table[j - 1] && s2.charAt(j - 1) === s3.charAt(j - 1);
      } else if (j === 0) {
        table[j] = table[j] && s1.charAt(i - 1) === s3.charAt(i - 1);
      } else {
        table[j] = (
          (s1.charAt(i - 1) === s3.charAt(i + j - 1) && table[j]) ||
          (s2.charAt(j - 1) === s3.charAt(i + j - 1) && table[j - 1])
        );
      }
    }
  }
  return table[s2.length];
};
// @lc code=end

