/*
 * @lc app=leetcode id=797 lang=typescript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
function allPathsSourceTarget(graph: number[][]): number[][] {
  const visit = new Set<number>();
  const map = new Map<number, number[][]>();

  function dfs(idx: number): number[][] {
    if (map.has(idx)) {
      return map.get(idx) as number[][];
    }
    if (idx === graph.length - 1) {
      return [[idx]];
    }
    const result: number[][] = [];
    for (const next of graph[idx]) {
      if (visit.has(next)) {
        continue;
      }
      visit.add(next);
      for (const r of dfs(next)) {
        result.push([idx, ...r]);
      }
      visit.delete(next);
    }
    map.set(idx, result);
    return result;
  }
  return dfs(0);
};
// @lc code=end

