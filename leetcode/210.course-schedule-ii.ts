/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const noPreSet = new Set<number>();
    const preMap: Map<number, Set<number>> = new Map();
    const nextMap: Map<number, Set<number>> = new Map();
    for (let i = 0; i < numCourses; i++) {
        noPreSet.add(i);
        preMap.set(i, new Set());
        nextMap.set(i, new Set());
    }
    for (const [id, pre] of prerequisites) {
        noPreSet.delete(id);
        preMap.get(id).add(pre);
        nextMap.get(pre).add(id);
    }
    const ans = [];
    while (noPreSet.size > 0) {
        const arr = Array.from(noPreSet);
        noPreSet.clear();
        for (const v of arr) {
            ans.push(v);
            const next = nextMap.get(v);
            for (const n of next) {
                const map = preMap.get(n);
                if (map.size === 0) {
                    continue;
                }
                map.delete(v);
                if (map.size === 0) {
                    noPreSet.add(n);
                }
            }
        }
    }
    return ans.length === numCourses ? ans : [];
};
// @lc code=end

