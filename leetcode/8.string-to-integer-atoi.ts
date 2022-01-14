/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const len = s.length;
    let i = 0;
    while (i < len && s.charAt(i) === ' ') {
        i++;
    }
    if (i === len) {
        return 0;
    }
    let negative = false;
    if (s.charAt(i) === '+' || s.charAt(i) === '-') {
        negative = s.charAt(i) === '-';
        i++;
    }
    let value = 0;
    const zero = '0'.charCodeAt(0);
    const nine = zero + 9;
    while (i < len && s.charCodeAt(i) >= zero && s.charCodeAt(i) <= nine) {
        value = value * 10 + (s.charCodeAt(i) - zero);
        i++;
    }
    return Math.min(Math.max(negative ? -value : value, -2147483648), 2147483647);
};
// @lc code=end

