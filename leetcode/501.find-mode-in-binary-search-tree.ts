/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
 */

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
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

function findMode(root: TreeNode): number[] {
    let mode = root.val;
    let maxMode = [root.val];
    let frequence = 0;
    let max = 0;
    const updater = (): void => {
        if (frequence > max) {
            max = Math.max(max, frequence);
            maxMode = [mode];
        } else if (frequence === max) {
            maxMode.push(mode)
        }
    }
    const inorder = (n: TreeNode): void => {
        if (n.left) {
            inorder(n.left);
        }
        if (n.val === mode) {
            frequence += 1;
        } else {
            updater();
            mode = n.val;
            frequence = 1;
        }
        if (n.right) {
            inorder(n.right);
        }
    }
    inorder(root);
    updater();
    return maxMode;
};
// @lc code=end

