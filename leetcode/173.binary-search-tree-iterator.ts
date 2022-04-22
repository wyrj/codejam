/*
 * @lc app=leetcode id=173 lang=typescript
 *
 * [173] Binary Search Tree Iterator
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

function *traverse(node: TreeNode | null): Generator<TreeNode> {
  if (!node) {
    return;
  }
  yield *traverse(node.left);
  yield node;
  yield *traverse(node.right);
}

class BSTIterator {
  private g: Generator<TreeNode>;
  private n: IteratorResult<TreeNode>

  constructor(root: TreeNode | null) {
    this.g = traverse(root);
    this.n = this.g.next();
  }

  public next(): number {
    const v = this.n.value?.val;
    this.n = this.g.next();
    return v;
  }

  public hasNext(): boolean {
    return !this.n.done;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

