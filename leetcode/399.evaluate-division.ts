/*
 * @lc app=leetcode id=399 lang=typescript
 *
 * [399] Evaluate Division
 */

// @lc code=start
interface GraphNode {
  variable: string,
  neighbor: Map<string, { weight: number, node: GraphNode }>;
}
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const nodeCollection = new Map<string, GraphNode>();
  function getNode(variable: string): GraphNode {
    let node = nodeCollection.get(variable);
    if (!node) {
      node = { variable, neighbor: new Map() };
      nodeCollection.set(variable, node);
    }
    return node;
  }
  for (let i = 0; i < equations.length; i++) {
    const [v1, v2] = equations[i];
    const value = values[i];
    const n1 = getNode(v1);
    const n2 = getNode(v2);
    n1.neighbor.set(v2, { weight: value, node: n2 });
    n2.neighbor.set(v1, { weight: 1 / value, node: n1 });
  }
  return queries.map(([qv1, qv2]) => {
    const n = nodeCollection.get(qv1);
    if (!n) {
      return -1;
    }
    if (qv1 === qv2) {
      return 1;
    }
    const queue = [{ node: n, value: 1 }];
    const seen = new Set([qv1]);
    while (queue.length > 0) {
      const { node, value } = queue.shift() as NonNullable<typeof queue[0]>;
      for (const { node: neighborNode, weight } of node.neighbor.values()) {
        if (seen.has(neighborNode.variable)) {
          continue;
        }
        if (neighborNode.variable === qv2) {
          return value * weight;
        }
        seen.add(neighborNode.variable);
        queue.push({ node: neighborNode, value: value * weight });
      }
    }
    return -1;
  })
};
// @lc code=end

