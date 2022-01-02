/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }
        if (low <= node.val && node.val <= high) {
            return node.val + dfs(node.left) + dfs(node.right);
        } else if (low > node.val) {
            return dfs(node.right);
        } else {
            return dfs(node.left);
        }
    }
    return dfs(root);
};
// @lc code=end

