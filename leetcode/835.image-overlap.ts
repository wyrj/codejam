/*
 * @lc app=leetcode id=835 lang=typescript
 *
 * [835] Image Overlap
 */

// @lc code=start
function largestOverlap(img1: number[][], img2: number[][]): number {
  const n = img1.length;
  function findPos(img: number[][]): number [] {
    const pos: number[] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (img[i][j] === 1) {
          pos.push(i * n * 3 + j)
        }
      }
    }
    return pos;
  }
  const pos1 = findPos(img1);
  const pos2 = findPos(img2);
  let max = 0;
  const map = new Map<number, number>();
  for (const p1 of pos1) {
    for (const p2 of pos2) {
      const v = (map.get(p1 - p2) ?? 0) + 1;
      max = Math.max(v, max);
      map.set(p1 - p2, v);
    }
  }
  return max;
};
// @lc code=end

