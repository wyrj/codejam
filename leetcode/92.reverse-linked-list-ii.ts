/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const fakeHead: ListNode = { val: 0, next: head };
  let pre = fakeHead;
  for (let i = 1; i < left; i++) {
    pre = pre.next as ListNode;
  }
  const len = right - left;
  const tail = pre.next as ListNode;
  for (let i = 0; i < len; i++) {
    const tmp = tail.next as ListNode;
    tail.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }
  return fakeHead.next;
};
// @lc code=end

