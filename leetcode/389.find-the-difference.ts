/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>();
    for (const char of s) {
        const count = (map.get(char) ?? 0) + 1;
        map.set(char, count);
    }
    for (const char of t) {
        const count = map.get(char) ?? 0;
        if (count === 0) {
            return char;
        }
        map.set(char, count - 1);
    }
    throw new Error(`${s},${t}`);
};
// @lc code=end

