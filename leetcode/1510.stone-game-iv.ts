/*
 * @lc app=leetcode id=1510 lang=typescript
 *
 * [1510] Stone Game IV
 */

// @lc code=start
function winnerSquareGame(n: number): boolean {
    const ans: boolean[] = new Array(n + 1).fill(false);
    ans[1] = true;
    for (let i = 2; i <= n; i++) {
        for (let sq = 1; sq <= Math.sqrt(i); sq++) {
            if (ans[i - sq * sq] === false) {
                ans[i] = true;
                break;
            }
        }
    }
    return ans[n];
};
// @lc code=end

winnerSquareGame(4);