/*
 * @lc app=leetcode id=847 lang=typescript
 *
 * [847] Shortest Path Visiting All Nodes
 */

// @lc code=start
interface QueueElement {
    remain: number;
    current: number;
    step: number;
}
function shortestPathLength(graph: number[][]): number {
    const visited = new Map<number, Set<number>>();
    const need = (1 << graph.length) - 1;
    const queue: QueueElement[] = [];
    for (let i = 0; i < graph.length; i++) {
        const remain = need ^ (1 << i);
        queue.push({ remain, current: i, step: 0 });
        visited.set(i, new Set([remain]));
    }
    while (queue.length > 0) {
        const now = queue.shift();
        const step = now.step + 1;
        for (const neighbor of graph[now.current]) {
            const remain = now.remain & (need ^ (1 << neighbor));
            if (remain === 0) {
                return step;
            }
            if (!visited.get(neighbor).has(remain)) {
                visited.get(neighbor).add(remain);
                queue.push({ remain, current: neighbor, step });
            }
        }
    }
    return 0;
};
// @lc code=end
shortestPathLength([[1, 2, 3], [0], [0], [0]]);
