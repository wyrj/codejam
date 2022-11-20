/*
 * @lc app=leetcode id=587 lang=typescript
 *
 * [587] Erect the Fence
 */

// @lc code=start
function outerTrees(trees: number[][]): number[][] {
  if (trees.length <= 3) {
    return trees;
  }
  function cross(p1: number[], p2: number[], p3: number[]): number {
    const x1 = p2[0] - p1[0];
    const y1 = p2[1] - p1[1];
    const x2 = p3[0] - p2[0];
    const y2 = p3[1] - p2[1];
    return x1 * y2 - y1 * x2;
  }

  trees.sort(([lx, ly], [rx, ry]) => {
    return (Math.atan2(ly, lx) - Math.atan2(ry, rx)) || ((lx * lx + ly * ly) - (rx * rx + ry * ry));
  });
  const lower: number[][] = [];
  const upper: number[][] = [];
  for (const point of trees) {
    while (lower.length >= 2 && cross(lower.at(-2) as number[], lower.at(-1) as number[], point) > 0) {
      lower.pop();
    }
    while (upper.length >= 2 && cross(upper.at(-2) as number[], upper.at(-1) as number[], point) < 0) {
      upper.pop();
    }
    lower.push(point);
    upper.push(point);
  }
  const s = new Set(lower.concat(upper).map(([x, y]) => `${x} ${y}`));
  return Array.from(
    s,
    (v => v.split(' ').map(v => parseInt(v, 10))),
  );
};
// @lc code=end


outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]])