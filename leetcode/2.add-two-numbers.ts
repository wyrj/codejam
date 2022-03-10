/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const fake = { val: 0, next: null };
    let carry = 0;
    let curr = fake;
    while (l1 || l2) {
        const val = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
        curr.next = { val: val % 10, next: null };
        carry = val > 9 ? 1 : 0;
        curr = curr.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry === 1) {
        curr.next = { val: 1, next: null };
    }
    return fake.next;
};
// @lc code=end

