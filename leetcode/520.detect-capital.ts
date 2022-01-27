/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
    return (
        word === word.toUpperCase() ||
        word === word.toLowerCase() ||
        word.slice(1) === word.slice(1).toLowerCase()
    );
};
// @lc code=end