/*
 * @lc app=leetcode id=1026 lang=typescript
 *
 * [1026] Maximum Difference Between Node and Ancestor
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
function maxAncestorDiff(root: TreeNode | null): number {
    function dfs(n: TreeNode): { min: number, max: number, diff: number} {
        if (n === null) {
            return { min: 1e5 + 1, max: -1, diff: 0 };
        }
        const left = dfs(n.left);
        const right = dfs(n.right);
        return {
            min: Math.min(left.min, right.min, n.val),
            max: Math.max(left.max, right.max, n.val),
            diff: Math.max(
                left.diff,
                right.diff,
                left.min === 1e5 + 1 ? 0 : Math.abs(n.val - left.min),
                right.min === 1e5 + 1 ? 0 : Math.abs(n.val - right.min),
                left.max === -1 ? 0 : Math.abs(n.val - left.max),
                right.max === -1 ? 0 : Math.abs(n.val - right.max),
            ),
        };
    }
    return dfs(root).diff;
};
// @lc code=end

