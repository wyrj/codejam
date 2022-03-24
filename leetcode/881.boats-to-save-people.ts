/*
 * @lc app=leetcode id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
function numRescueBoats(people: number[], limit: number): number {
    const remain = new Array(limit).fill(0);
    let count = 0;
    for (const w of people) {
        if (w >= limit) {
            count += 1;
        } else {
            remain[w] += 1;
        }
    }
    let i = limit - 1;
    while (i > 0) {
        if (remain[i] === 0) {
            i -= 1;
            continue;
        }
        count += 1;
        remain[i] -= 1;
        for (let index = limit - i; index > 0; index--) {
            if (remain[index] > 0) {
                remain[index] -= 1;
                break;
            }
        }
    }
    return count;
};
// @lc code=end

