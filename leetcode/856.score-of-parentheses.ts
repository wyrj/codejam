/*
 * @lc app=leetcode id=856 lang=typescript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
function scoreOfParentheses(s: string): number {
    const stack: number[] = [0];
    for (const p of s) {
        if (p === '(') {
            stack.push(0);
        } else {
            const v = (stack.pop() || 0.5) * 2;
            stack[stack.length - 1] += v;
        }
    }
    return stack[0];
};
// @lc code=end

