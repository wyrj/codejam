/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */
interface ListNode {
    val: number;
    next: ListNode | null;
}
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

function swapPairs(head: ListNode | null): ListNode | null {
    const fakeHead: ListNode = { val: 0, next: head };
    let curr = fakeHead;
    while (curr?.next?.next) {
        const next = curr.next.next;
        curr.next.next = next.next;
        next.next = curr.next;
        curr.next = next;
        curr = curr.next.next;
    }
    return fakeHead.next;
};
// @lc code=end

