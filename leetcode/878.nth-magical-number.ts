/*
 * @lc app=leetcode id=878 lang=typescript
 *
 * [878] Nth Magical Number
 */

// @lc code=start
function nthMagicalNumber(n: number, a: number, b: number): number {
    function gcd(l: number, r: number): number {
        if (l % r === 0) {
            return r;
        }
        return gcd(r, l % r);
    }
    const lcm = a * b / gcd(a, b);
    const repeat = [];
    let na = a, nb = b;
    while (na <= lcm || nb <= lcm) {
        if (na < nb) {
            repeat.push(na);
            na += a;
        } else if (na > nb) {
            repeat.push(nb);
            nb += b;
        } else {
            repeat.push(na);
            na += a;
            nb += b;
        }
    }
    const repeatTimes = Math.floor((n - 1) / repeat.length);
    let ans = repeat[(n - 1) % repeat.length];
    for (let i = 0; i < repeatTimes; i++) {
        ans = (ans + lcm) % (1e9 + 7);
    }
    return ans;
};
// @lc code=end