/*
 * @lc app=leetcode id=1584 lang=typescript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
  function dis(p1: number[], p2: number[]) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  }
  const allEdge: Array<{ i: number, j: number, dis: number }> = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      allEdge.push({i, j, dis: dis(points[i], points[j])});
    }
  }
  allEdge.sort((lhs, rhs) => lhs.dis - rhs.dis);

  const r: number[] = Array.from(points, (_, idx) => idx);
  function findRoot(idx: number): number {
    while (r[idx] !== idx) {
      idx = r[idx];
    }
    return idx;
  }
  let ans = 0;
  for (const { i, j, dis } of allEdge) {
    const ri = findRoot(i);
    const rj = findRoot(j);
    if (ri === rj) {
      continue;
    }
    ans += dis;
    const root = Math.min(ri, rj);
    r[ri] = r[rj] = root;
  }
  return ans;
};
// @lc code=end

minCostConnectPoints([[-14,-14],[-18,5],[18,-10],[18,18],[10,-2]])