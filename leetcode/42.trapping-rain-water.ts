/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
interface QElement {
  height: number,
  index: number,
}
function trap(height: number[]): number {
  const q: QElement[] = [];
  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const h = height[i];
    if (h === 0) {
      continue;
    }
    let lastHeight = 0;
    while (q.length > 0) {
      const last = q[q.length - 1];
      water += (Math.min(last.height, h) - lastHeight) * (i - last.index - 1);
      lastHeight = last.height;
      if (last.height > h) {
        break;
      }
      q.pop();
    }
    q.push({ height: h, index: i });
  }
  return water;
};
// @lc code=end

