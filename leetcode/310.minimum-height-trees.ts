/*
 * @lc app=leetcode id=310 lang=typescript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
interface Nodee {
    idx: number;
    neighbor: Set<Nodee>;
}
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    const nodes: Nodee[] = Array.from(
        { length: n },
        (_, idx) => ({ idx, neighbor: new Set() }),
    );
    for (const [a, b] of edges) {
        nodes[a].neighbor.add(nodes[b]);
        nodes[b].neighbor.add(nodes[a]);
    }
    const remainNodes = new Set(nodes);
    let oneEdgeNodes = nodes.filter(n => n.neighbor.size === 1);
    while (remainNodes.size > 2) {
        const nextRoundNodes = [];
        for (const node of oneEdgeNodes) {
            const neighbor = node.neighbor.values().next().value as Nodee;
            neighbor.neighbor.delete(node);
            if (neighbor.neighbor.size === 1) {
                nextRoundNodes.push(neighbor);
            }
            remainNodes.delete(node);
        }
        oneEdgeNodes = nextRoundNodes;
    }
    return Array.from(remainNodes.values()).map(n => n.idx);
};
// @lc code=end
