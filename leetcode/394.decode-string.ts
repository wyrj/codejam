/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 */

// @lc code=start
function decodeString(s: string): string {
    const q: Array<{ times: string, result: string }> = [
        { times: '', result: '' },
    ];
    for (const c of s) {
        if (c >= '0' && c <= '9') {
            q[q.length - 1].times += c;
        } else if (c >= 'a' && c <= 'z') {
            q[q.length - 1].result += c;
        } else if (c === '[') {
            q.push({ times: '', result: '' });
        } else if (c === ']') {
            q[q.length - 2].result += q[q.length - 1].result.repeat(parseInt(q[q.length - 2].times, 10));
            q.pop();
            q[q.length - 1].times = '';
        }
    }
    return q[0].result;
};
// @lc code=end