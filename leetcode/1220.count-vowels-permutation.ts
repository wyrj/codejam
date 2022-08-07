/*
 * @lc app=leetcode id=1220 lang=typescript
 *
 * [1220] Count Vowels Permutation
 */

// @lc code=start
function countVowelPermutation(n: number): number {
  const edge = [
    [false, true, false, false, false],
    [true, false, true, false, false],
    [true, true, false, true, true],
    [false, false, true, false, true],
    [true, false, false, false, false],
  ]

  let now = new Array(5).fill(1);
  for (let ni = 2; ni <= n; ni++) {
    let next: number[] = [];
    for (let i = 0; i < 5; i++) {
      next.push(
        edge[i].reduce(
          (count, hasEdge, idx) => hasEdge ? count + now[idx] : count, 0
        ) % (1e9 + 7)
      )
    }
    now = next;
  }
  return now.reduce((s, v) => s + v) % (1e9 + 7);
};
// @lc code=end
