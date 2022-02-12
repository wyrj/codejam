/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const record = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < s1.length; i++) {
        record[s1.charCodeAt(i) - base] += 1;
    }
    let target = s1.length;
    const next = (idx: number): void => {
        record[s2.charCodeAt(idx) - base] -= 1;
        if (record[s2.charCodeAt(idx) - base] >= 0) {
            target -= 1;
        }
    }
    const prev = (idx: number): void => {
        record[s2.charCodeAt(idx - s1.length) - base] += 1;
        if (record[s2.charCodeAt(idx - s1.length) - base] > 0) {
            target += 1;
        }
    }
    for (let i = 0; i < s1.length; i++) {
        next(i);
    }
    if (target === 0) {
        return true;
    }
    for (let i = s1.length; i < s2.length; i++) {
        next(i);
        prev(i);
        if (target === 0) {
            return true;
        }
    }
    return false;
};
// @lc code=end

checkInclusion('ab', 'eidbaooo');