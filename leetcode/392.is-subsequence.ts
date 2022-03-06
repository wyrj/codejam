/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    const table: number[][] = Array.from({ length: 26 }, () => []);
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < t.length; i++) {
        const arr = table[t.charCodeAt(i) - base];
        if (arr.length < i + 1) {
            arr.push(...new Array(i + 1 - arr.length).fill(i + 1));
        }
    }

    let index = 0;
    for (const char of s) {
        index = table[char.charCodeAt(0) - base][index];
        if (index === undefined) {
            return false;
        }
    }
    return true;
};
// @lc code=end

isSubsequence('abc', 'ahbgdc');