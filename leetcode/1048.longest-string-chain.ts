/*
 * @lc app=leetcode id=1048 lang=typescript
 *
 * [1048] Longest String Chain
 */

// @lc code=start
function longestStrChain(words: string[]): number {
  const bucket: string[][] = Array.from({ length: 17 }, () => []);
  for (const w of words) {
    bucket[w.length].push(w);
  }
  function isPredecessor(w1: string, w2: string): boolean {
    let i1 = 0;
    let i2 = 0;
    while (i1 < w1.length) {
      if (w1.charAt(i1) === w2.charAt(i2)) {
        i1 += 1;
        i2 += 1;
      } else if (i1 === i2) {
        i2 += 1;
      } else {
        return false;
      }
    }
    return true;
  }
  let max = 1;
  let chainCount = bucket[16].map(() => 1);
  for (let i = 15; i >= 0; i--) {
    const next: number[] = [];
    for (let j = 0; j < bucket[i].length; j++) {
      let count = 1;
      for (let k = 0; k < bucket[i + 1].length; k++) {
        if (isPredecessor(bucket[i][j], bucket[i + 1][k])) {
          count = Math.max(count, chainCount[k] + 1);
        }
      }
      next.push(count);
      max = Math.max(max, count);
    }
    chainCount = next;
  }
  return max;
};
// @lc code=end

