/*
 * @lc app=leetcode id=701 lang=typescript
 *
 * [701] Insert into a Binary Search Tree
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
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return { val, left: null, right: null };
    }
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};
// @lc code=end

