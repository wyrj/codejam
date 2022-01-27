/*
 * @lc app=leetcode id=1305 lang=typescript
 *
 * [1305] All Elements in Two Binary Search Trees
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

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    function *inorderTree(node: TreeNode | null): Generator<number, number> {
        if (!node) {
            return;
        }
        yield* inorderTree(node.left);
        yield node.val;
        yield* inorderTree(node.right);
    }
    const it1 = inorderTree(root1);
    const it2 = inorderTree(root2);
    let result1 = it1.next();
    let result2 = it2.next();
    const ans = [];
    while (!result1.done && !result2.done) {
        if (result1.value < result2.value) {
            ans.push(result1.value);
            result1 = it1.next();
        } else {
            ans.push(result2.value);
            result2 = it2.next();
        }
    }
    while (!result1.done) {
        ans.push(result1.value);
        result1 = it1.next();
    }
    while (!result2.done) {
        ans.push(result2.value);
        result2 = it2.next();
    }
    return ans;
};
// @lc code=end

