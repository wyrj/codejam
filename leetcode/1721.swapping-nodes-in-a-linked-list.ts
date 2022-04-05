/*
 * @lc app=leetcode id=1721 lang=typescript
 *
 * [1721] Swapping Nodes in a Linked List
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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let len = 0;
  let curr = head;
  while (curr) {
    len += 1;
    curr = curr.next;
  }
  const k2 = len - k + 1;
  if (k === k2) {
    return head;;
  }
  const fake = { next: head, val: 0 };
  let firstPre = fake;
  let first = head;
  const firstK = Math.min(k, k2);
  for (let i = 1; i < firstK; i++) {
    firstPre = first;
    first = first.next;
  }
  const secondK = Math.max(k, k2);
  let secondPre = firstPre;
  let second = first;
  for (let i = firstK; i < secondK; i++) {
    secondPre = second;
    second = second.next;
  }
  firstPre.next = second;
  secondPre.next = first;
  const temp = first.next;
  first.next = second.next;
  second.next = temp;
  return fake.next;
};
// @lc code=end

