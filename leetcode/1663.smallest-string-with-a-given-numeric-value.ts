/*
 * @lc app=leetcode id=1663 lang=typescript
 *
 * [1663] Smallest String With A Given Numeric Value
 */

// @lc code=start
function getSmallestString(n: number, k: number): string {
    const ans: number[] = [];
    const base = 'a'.charCodeAt(0);
    let remain = n * 26;
    for (let i = 0; i < n; i++) {
        remain -= 26;
        const now = remain >= k ? 1 : (k - remain);
        k -= now;
        ans.push(base + now - 1);
    }
    return ans.map(v => String.fromCharCode(v)).join('');
};
// @lc code=end

