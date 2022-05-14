/*
 * @lc app=leetcode id=743 lang=typescript
 *
 * [743] Network Delay Time
 */

// @lc code=start
function networkDelayTime(times: number[][], n: number, k: number): number {
  const edges = Array.from({ length: n }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < n; i++) {
    edges[i][i] = 0;
  }
  for (const [u, v, w] of times) {
    edges[u - 1][v - 1] = w;
  }
  const dis = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dis[k - 1] = 0;
  const set = new Set(Array.from({ length: n }, (_, idx) => idx));
  while (set.size > 0) {
    const candidate = Array.from(set);
    let nodeIndex = candidate[0];
    let min = dis[nodeIndex];
    for (let i = 1; i < candidate.length; i++) {
      const element = candidate[i];
      if (dis[element] < min) {
        min = dis[element];
        nodeIndex = element;
      }
    }
    if (min === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    for (let i = 0; i < n; i++) {
      if (i !== nodeIndex && edges[nodeIndex][i] !== Number.MAX_SAFE_INTEGER) {
        dis[i] = Math.min(dis[i], dis[nodeIndex] + edges[nodeIndex][i]);
      }
    }
    set.delete(nodeIndex);
  }
  return Math.max(...dis);
};
// @lc code=end

