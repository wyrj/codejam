/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const pair = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const stack: string[] = [];
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (pair[char] !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};
// @lc code=end

