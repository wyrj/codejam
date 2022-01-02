/*
 * @lc app=leetcode id=1306 lang=typescript
 *
 * [1306] Jump Game III
 */

// @lc code=start
function canReach(arr: number[], start: number): boolean {
    let q: number[] = [start];
    let seek: Set<number> = new Set();
    while (q.length > 0) {
        const idx = q.shift();
        const leftIndex = idx - arr[idx];
        if (leftIndex >= 0 && !seek.has(leftIndex)) {
            if (arr[leftIndex] === 0) {
                return true;
            }
            q.push(leftIndex);
            seek.add(leftIndex);
        }
        const rightIndex = idx + arr[idx];
        if (rightIndex < arr.length && !seek.has(rightIndex)) {
            if (arr[rightIndex] === 0) {
                return true;
            }
            q.push(rightIndex);
            seek.add(rightIndex);
        }
    }
    return false;
};
// @lc code=end

