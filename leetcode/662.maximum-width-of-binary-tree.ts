/*
 * @lc app=leetcode id=662 lang=typescript
 *
 * [662] Maximum Width of Binary Tree
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

function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let queue = [{ idx: 0, node: root }];
    let width = 1;
    while (queue.length > 0) {
        const nextQueue = [];
        let base: number | undefined;
        for (const { idx, node } of queue) {
            if (node.left) {
                const index = idx * 2;
                if (base === undefined) {
                    base = index;
                }
                nextQueue.push({ idx: index - base, node: node.left});
            }
            if (node.right) {
                const index = idx * 2 + 1;
                if (base === undefined) {
                    base = index;
                }
                nextQueue.push({idx: index - base, node: node.right });
            }
        }
        if (nextQueue.length > 0) {
            width = Math.max(width, nextQueue[nextQueue.length - 1].idx + 1);
        }
        queue = nextQueue;
    }
    return width;
};
// @lc code=end

