/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
    const ans = [];
    for (const p of path.slice(1).split('/')) {
        if (p === '..') {
            ans.pop();
        } else if (p !== '.' && p !== '') {
            ans.push(p);
        }
    }
    return `/${ans.join('/')}`;
};
// @lc code=end

