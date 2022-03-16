/*
 * @lc app=leetcode id=1249 lang=typescript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
    let count = 0;
    const ans: string[] = [];
    for (const char of s) {
        if (char === ')') {
            if (count === 0) {
                continue;
            }
            count -= 1;
        } else if (char === '(') {
            count += 1;
        }
        ans.push(char);
    }
    for (let i = 0; i < count; i++) {
        const index = ans.lastIndexOf('(');
        ans.splice(index, 1);
    }
    return ans.join('');
};
// @lc code=end

