/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
    const t: boolean[] = new Array(n).fill(true);
    let count = n;
    for (const [a] of trust) {
        if (t[a - 1]) {
            count -= 1;
            t[a - 1] = false;
        }
    }
    if (count !== 1) {
        return -1;
    }
    const ans = t.indexOf(true) + 1;
    const ta = new Array(n).fill(false);
    count = 0;
    for (const [a, b] of trust) {
        if (b === ans && ta[a - 1] === false) {
            ta[a - 1] = true;
            count += 1;
        }
    }
    return count === n - 1 ? ans : -1;
};
// @lc code=end
