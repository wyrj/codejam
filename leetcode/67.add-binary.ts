/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const la = a.length;
    const lb = b.length;
    let carry = 0;
    const result: string[] = [];
    for (let i = 0; i < Math.max(la, lb); i++) {
        const ba = (la - i - 1) >= 0 ? parseInt(a.charAt(la - i - 1), 10) : 0;
        const bb = (lb - i - 1) >= 0 ? parseInt(b.charAt(lb - i - 1), 10) : 0;
        const sum = ba + bb + carry;
        result.push(`${sum % 2}`);
        carry = Math.floor(sum / 2);
    }
    if (carry > 0) {
        result.push('1');
    }
    return result.reverse().join('');
};
// @lc code=end