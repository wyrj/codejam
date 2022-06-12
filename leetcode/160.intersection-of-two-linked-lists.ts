/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  function getLen(n: ListNode | null): number {
    let len = 0;
    while (n) {
      len += 1;
      n = n.next;
    }
    return len;
  }
  const lenA = getLen(headA);
  const lenB = getLen(headB);
  let nA = headA;
  let nB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      nA = nA?.next ?? null;
    }
  } else if (lenB > lenA) {
    for (let i = 0; i < lenB - lenA; i++) {
      nB = nB?.next ?? null;
    }
  }
  while (nA && nB) {
    if (nA === nB) {
      return nA;
    }
    nA = nA.next;
    nB = nB.next;
  }
  return null;
};
// @lc code=end

