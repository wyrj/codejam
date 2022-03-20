/*
 * @lc app=leetcode id=316 lang=typescript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
    const countMap = new Map<string, number>();
    const existSet = new Set<string>();
    const stack: string[] = [];
    for (const char of s) {
        countMap.set(char, (countMap.get(char) ?? 0) + 1);
    }
    for (const char of s) {
        countMap.set(char, countMap.get(char) - 1);
        if (!existSet.has(char)) {
            while (stack.length > 0) {
                const last = stack[stack.length - 1];
                if (last < char || countMap.get(last) === 0) {
                    break;
                }
                stack.pop();
                existSet.delete(last);
            }
            existSet.add(char);
            stack.push(char);
        }
    }
    return stack.join('');
};
// @lc code=end

