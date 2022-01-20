/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    const map = new Map<string, string>();
    const set = new Set<string>();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern.charAt(i);
        if (!map.has(char)) {
            if (set.has(words[i])) {
                return false;
            }
            map.set(char, words[i]);
            set.add(words[i]);
        } else if (map.get(char) !== words[i]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

