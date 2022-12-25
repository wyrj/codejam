/*
 * @lc app=leetcode id=886 lang=typescript
 *
 * [886] Possible Bipartition
 */

// @lc code=start
function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const graph = Array.from({ length: n + 1 }, () => new Set<number>());
  for (const [u, v] of dislikes) {
    graph[u].add(v);
    graph[v].add(u);
  }

  const visit = new Map<number, boolean>();
  for (let i = 1; i <= n; i++) {
    if (visit.has(i)) {
      continue;
    }
    let queue = [i];
    let color = true;
    visit.set(i, true);
    while (queue.length > 0) {
      const nextQ: number[] = [];
      color = !color;
      for (const u of queue) {
        for (const v of graph[u]) {
          if (!visit.has(v)) {
            visit.set(v, color);
            nextQ.push(v);
          } else if (visit.get(v) !== color) {
            return false;
          }
        }
      }
      queue = nextQ;
    }
  }
  return true;
};
// @lc code=end

