/*
 * @lc app=leetcode id=382 lang=typescript
 *
 * [382] Linked List Random Node
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
    val: number;
    next: ListNode | null;
}

class Solution {
    private head: ListNode;
    private now: ListNode;
    constructor(head: ListNode) {
        this.head = head;
        this.now = head;
    }

    getRandom(): number {
        const step = Math.floor(Math.random() * 1e4);
        for (let i = 0; i < step; i++) {
            this.now = this.now.next ?? this.head;
        }
        return this.now.val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

