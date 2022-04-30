/*
 * @lc app=leetcode id=785 lang=typescript
 *
 * [785] Is Graph Bipartite?
 */

// @lc code=start
function isBipartite(graph: number[][]): boolean {
  const check = new Set<number>(Array.from(graph, (_, idx) => idx));
  let left = new Set<number>();
  let right = new Set<number>();
  while (check.size > 0) {
    let q = [check.values().next().value];
    check.delete(q[0]);
    while (q.length > 0) {
      const next: number[] = [];
      for (const n of q) {
        for (const b of graph[n]) {
          if (left.has(b)) {
            return false;
          }
          if (check.has(b)) {
            check.delete(b);
            right.add(b);
            next.push(b);
          }
        }
      }
      q = next;
      const tmp = left;
      left = right;
      right = tmp;
    }
  }
  return true;
};
// @lc code=end
