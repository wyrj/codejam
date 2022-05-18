/*
 * @lc app=leetcode id=1192 lang=typescript
 *
 * [1192] Critical Connections in a Network
 */

// @lc code=start
interface GraphNode {
  idx: number,
  neighbor: Set<GraphNode>,
}
function criticalConnections(n: number, connections: number[][]): number[][] {
  const nodes: GraphNode[] = Array.from({ length: n }, (_, idx) => ({ idx, neighbor: new Set() }));
  const edgeSet = new Set<number>();
  function h(n1: number, n2: number): number {
    const min = Math.min(n1, n2);
    const max = n1 + n2 - min;
    return min * n + max;
  }
  for (const [n1, n2] of connections) {
    nodes[n1].neighbor.add(nodes[n2]);
    nodes[n2].neighbor.add(nodes[n1]);
    edgeSet.add(h(n1, n2));
  }
  const visitSet = new Set<number>();
  const visitEdge = new Set<number>();
  const depthRecord = new Array(n).fill(-2);
  function r(node: GraphNode, depth: number): number {
    if (visitSet.has(node.idx)) {
      return depthRecord[node.idx];
    }
    visitSet.add(node.idx);
    depthRecord[node.idx] = depth;
    let min = depth;
    for (const nei of Array.from(node.neighbor)) {
      const hash = h(nei.idx, node.idx);
      if (!visitEdge.has(hash)) {
        visitEdge.add(hash);
        const resultDepth = r(nei, depth + 1);
        if (resultDepth <= depth) {
          edgeSet.delete(hash);
          min = Math.min(min, resultDepth);
        }
      }
    }
    return min;
  }
  r(nodes[0], 0);
  return Array.from(edgeSet).map((v) => ([Math.floor(v / n), v % n]));
};
// @lc code=end
criticalConnections(
  6,
  [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]
);
