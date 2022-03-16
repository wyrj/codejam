/*
 * @lc app=leetcode id=946 lang=typescript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const q: number[] = [];
    let pIndex = 0;
    for (const n of popped) {
        while (q[q.length - 1] !== n && pIndex < pushed.length) {
            q.push(pushed[pIndex]);
            pIndex += 1;
        }
        if (q.pop() !== n) {
            return false;
        }
    }
    return true;
};
// @lc code=end

