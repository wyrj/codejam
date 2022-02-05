/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length > 2) {
        const half = Math.floor(lists.length / 2);
        lists = [
            mergeKLists(lists.slice(0, half)),
            mergeKLists(lists.slice(half)),
        ];
    }
    const psudoHead: ListNode = { val: 0, next: null };
    let tail = psudoHead;
    let [curr1, curr2] = lists;
    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        tail = tail.next;
    }
    if (curr1) {
        tail.next = curr1;
    } else if (curr2) {
        tail.next = curr2;
    }
    return psudoHead.next;
};
// @lc code=end

