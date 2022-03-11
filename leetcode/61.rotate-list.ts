/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return null;
    }
    let curr = head;
    let count = 1;
    while (curr.next) {
        curr = curr.next;
        count += 1;
    }
    curr.next = head;
    k = k % count;
    curr = head;
    const step = count - k - 1;
    for (let i = 0; i < step; i++) {
        curr = curr.next;
    }
    const ans = curr.next;
    curr.next = null;
    return ans;
};
// @lc code=end

