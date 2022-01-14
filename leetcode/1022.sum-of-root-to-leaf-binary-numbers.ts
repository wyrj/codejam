/*
 * @lc app=leetcode id=1022 lang=typescript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
function sumRootToLeaf(root: TreeNode | null): number {
    let sum = 0;
    function dfs(node: TreeNode, currentValue: number): void {
        const value = currentValue * 2 + node.val;
        if (!node.left && !node.right) {
            sum += value;
            return;
        }
        if (node.left) {
            dfs(node.left, value);
        }
        if (node.right) {
            dfs(node.right, value);
        }
    }
    if (root) {
        dfs(root, 0);
    }
    return sum;
};
// @lc code=end

