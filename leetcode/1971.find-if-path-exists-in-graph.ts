/*
 * @lc app=leetcode id=1971 lang=typescript
 *
 * [1971] Find if Path Exists in Graph
 */

// @lc code=start
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if (source === destination) {
    return true;
  }

  const neighbor = new Map<number, Set<number>>();
  function addNeighbor(u: number, v: number): void {
    const s = neighbor.get(u) ?? new Set();
    s.add(v);
    neighbor.set(u, s);
  }
  for (const [u, v] of edges) {
    addNeighbor(u, v);
    addNeighbor(v, u);
  }

  const q = [source];
  const visit = new Set(q);
  while (q.length > 0) {
    const u = q.shift() as number;
    for (const v of neighbor.get(u) ?? []) {
      if (!visit.has(v)) {
        if (v === destination) {
          return true;
        }
        q.push(v);
        visit.add(v);
      }
    }
  }
  return false;
};
// @lc code=end

