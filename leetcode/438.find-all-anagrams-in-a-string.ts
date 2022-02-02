/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const pMap = new Map();
    const pLen = p.length;
    let cont = p.length;
    for (const char of p) {
        if (pMap.has(char)) {
            pMap.set(char, pMap.get(char) + 1);
        } else {
            pMap.set(char, 1);
        }
    }

    const addMap = (char: string): void => {
        const count = pMap.get(char);
        if (count === undefined) {
            return;
        }
        if (count > 0) {
            cont -= 1;
        }
        pMap.set(char, count - 1);
    };
    const removeMap = (char: string): void => {
        const count = pMap.get(char);
        if (count === undefined) {
            return;
        }
        if (count >= 0) {
            cont += 1;
        }
        pMap.set(char, count + 1);
    }
    for (let i = 0; i < pLen; i++) {
        addMap(s.charAt(i));
    }

    const ans = [];
    if (cont === 0) {
        ans.push(0);
    }
    for (let i = pLen; i < s.length; i++) {
        removeMap(s.charAt(i - pLen));
        addMap(s.charAt(i));
        if (cont === 0) {
            ans.push(i - pLen + 1);
        }
    }
    return ans;
};
// @lc code=end

