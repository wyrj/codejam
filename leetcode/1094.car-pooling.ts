/*
 * @lc app=leetcode id=1094 lang=typescript
 *
 * [1094] Car Pooling
 */

// @lc code=start
function carPooling(trips: number[][], capacity: number): boolean {
    const sortedByFrom = trips.slice().sort((lhs, rhs) => lhs[1] - rhs[1]);
    const sortedByTo = trips.slice().sort((lhs, rhs) => lhs[2] - rhs[2]);
    let fromIndex = 0;
    let toIndex = 0;
    let location = sortedByFrom[0][1];
    while (fromIndex < trips.length && toIndex < trips.length) {
        while (toIndex < trips.length && sortedByTo[toIndex][2] === location) {
            capacity += sortedByTo[toIndex][0];
            toIndex += 1;
        }
        while (fromIndex < trips.length && sortedByFrom[fromIndex][1] === location) {
            capacity -= sortedByFrom[fromIndex][0];
            if (capacity < 0) {
                return false;
            }
            fromIndex += 1;
        }
        location = Math.min(
            sortedByFrom[fromIndex]?.[1] ?? 1000,
            sortedByTo[toIndex]?.[2] ?? 1000,
        );
    }
    return true;
};
// @lc code=end

