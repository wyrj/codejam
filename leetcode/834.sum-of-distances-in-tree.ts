/*
 * @lc app=leetcode id=834 lang=typescript
 *
 * [834] Sum of Distances in Tree
 */

// @lc code=start
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const neighbor = Array.from({ length: n }, () => new Set<number>());
  for (const [u, v] of edges) {
    neighbor[u].add(v);
    neighbor[v].add(u);
  }

  const childrenCount = new Array(n).fill(0);
  const stepFromChildren = new Array(n).fill(0);
  const stepFromParent = new Array(n).fill(0);

  (function dfs(u: number, parent: number): void {
    for (const v of neighbor[u]) {
      if (v === parent) {
        continue;
      }
      dfs(v, u);
      childrenCount[u] += childrenCount[v] + 1;
      stepFromChildren[u] += childrenCount[v] + stepFromChildren[v] + 1;
    }
  })(0, -1);

  (function dfs(u: number, parent: number): void {
    if (parent !== -1) {
      const stepToParent = stepFromChildren[u] + childrenCount[u] + 1;
      stepFromParent[u] = stepFromChildren[parent] - stepToParent + stepFromParent[parent] + (n - childrenCount[u] - 1);
    }
    for (const v of neighbor[u]) {
      if (v === parent) {
        continue;
      }
      dfs(v, u);
    }
  })(0, -1);

  return Array.from({ length: n }, (_, idx) => stepFromChildren[idx] + stepFromParent[idx]);
};
// @lc code=end
sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]);
