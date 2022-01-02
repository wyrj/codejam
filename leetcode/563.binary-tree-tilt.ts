/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
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
    left: TreeNode | null;
    right: TreeNode | null;
    val: number;
}
function findTilt(root: TreeNode | null): number {
    function dfs(n: TreeNode): { sum: number, diff: number } {
        if (!n) {
            return { sum: 0, diff: 0 };
        }
        const lResult = dfs(n.left);
        const rResult = dfs(n.right);
        return {
            sum: lResult.sum + rResult.sum + n.val,
            diff: lResult.diff + rResult.diff + Math.abs(lResult.sum - rResult.sum),
        };
    }
    return dfs(root).diff;
};
// @lc code=end

