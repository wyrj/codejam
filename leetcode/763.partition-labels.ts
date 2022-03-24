/*
 * @lc app=leetcode id=763 lang=typescript
 *
 * [763] Partition Labels
 */

// @lc code=start
function partitionLabels(s: string): number[] {
    const countMap = new Map<string, number>();
    for (const char of s) {
        countMap.set(char, (countMap.get(char) ?? 0) + 1);
    }
    const iterMap = new Map<string, number>();
    const addMap = (char: string): void => {
        const count = (iterMap.get(char) ?? 0) + 1;
        if (count === countMap.get(char)) {
            iterMap.delete(char);
        } else {
            iterMap.set(char, count);
        }
    }
    const ans = [];
    let last = -1;
    for (let i = 0; i < s.length; i++) {
        addMap(s.charAt(i));
        if (iterMap.size === 0) {
            ans.push(i - last);
            last = i;
        }
    }
    return ans;
};
// @lc code=end

partitionLabels('ababcbacadefegdehijhklij');