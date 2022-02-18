/*
 * @lc app=leetcode id=402 lang=typescript
 *
 * [402] Remove K Digits
 */

// @lc code=start
function removeKdigits(num: string, k: number): string {
    let ans = '';
    const findIndex = (start: number, end: number): number => {
        let minIndex = start;
        let min = num.charCodeAt(start);
        for (let i = start + 1; i <= end; i++) {
            const code = num.charCodeAt(i);
            if (code < min) {
                minIndex = i;
                min = code;
            }
        }
        return minIndex;
    }
    let currIndex = 0;
    while (currIndex + k < num.length) {
        const index = findIndex(currIndex, currIndex + k);
        ans = ans.concat(num.charAt(index));
        k -= (index - currIndex);
        currIndex = index + 1;
    }
    while (ans.length > 1 && ans.charAt(0) === '0') {
        ans = ans.slice(1);
    }
    return ans ? ans : '0';
};
// @lc code=end

removeKdigits('1432219', 3);