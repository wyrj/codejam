/*
 * @lc app=leetcode id=902 lang=typescript
 *
 * [902] Numbers At Most N Given Digit Set
 */

// @lc code=start
function atMostNGivenDigitSet(digits: string[], n: number): number {
    function findIndex(char: string): number {
        let low = 0;
        let high = digits.length - 1;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const d = digits[mid];
            if (d === char) {
                return mid;
            } else if (d < char) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return digits[low] >= char ? low : (low + 1);
    }
    const s = `${n}`;
    let ans = digits.length === 1
        ? s.length - 1
        : (Math.pow(digits.length, s.length) - 1) / (digits.length - 1) - 1;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        const idx = findIndex(c);
        ans += idx * Math.pow(digits.length, s.length - i - 1);
        if (idx === digits.length || digits[idx] !== c) {
            break;
        }
        if (i === s.length - 1) {
            ans += 1;
        }
    }
    return ans;
};
// @lc code=end

