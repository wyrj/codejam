/*
 * @lc app=leetcode id=133 lang=typescript
 *
 * [133] Clone Graph
 */
interface Node {
    val: number;
    neighbors: Node[];
}
// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if (!node) {
        return null;
    }
    const map = new Map<Node, Node>();
    let q = [node];
    const set = new Set<Node>(q);
    while (q.length > 0) {
        const n = q.pop();
        const shadow = new Node(n.val);
        map.set(n, shadow);
        for (const neighbor of n.neighbors) {
            const shadowNeighbor = map.get(neighbor);
            if (shadowNeighbor) {
                shadowNeighbor.neighbors.push(shadow);
                shadow.neighbors.push(shadowNeighbor);
            } else if (!set.has(neighbor)) {
                set.add(neighbor);
                q.push(neighbor);
            }
        }
    }
    return map.get(node);
};
// @lc code=end

