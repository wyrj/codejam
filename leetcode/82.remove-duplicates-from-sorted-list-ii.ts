/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const fake = { next: head, val: 0 };
    let curr = fake;
    while (curr) {
        while (curr.next && curr.next.next && curr.next.val === curr.next.next.val) {
            const val = curr.next.val;
            while (curr.next?.val === val) {
                curr.next = curr.next.next;
            }
        }
        curr = curr.next;
    }
    return fake.next;
};
// @lc code=end

