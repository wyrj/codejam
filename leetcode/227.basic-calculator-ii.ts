/*
 * @lc app=leetcode id=227 lang=typescript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
interface TOKEN {
    value: number;
    op: string;
}
function calculate(s: string): number {
    function* tokenize (str: string): Generator<TOKEN> {
        let lastIndex = 0;
        let lastOp = '';
        const op = ['+', '-', '*', '/'];
        for (let i = 1; i < str.length; i++) {
            if (op.indexOf(str.charAt(i)) === -1) {
                continue;
            }
            yield {
                value: parseInt(str.slice(lastIndex, i), 10),
                op: lastOp,
            };
            lastOp = str.charAt(i);
            lastIndex = i + 1;
        }
        yield { value: parseInt(str.slice(lastIndex)), op: lastOp };
    }
    const iter = tokenize(s);
    const tokenQ: TOKEN[] = [iter.next().value];
    function merge(): void {
        if (tokenQ.length <= 1) {
            return;
        }
        const last = tokenQ.pop() as TOKEN;
        const token = tokenQ[tokenQ.length - 1];
        switch(last.op) {
            case '+':
                token.value = token.value + last.value;
                break;
            case '-':
                token.value = token.value - last.value;
                break;
            case '*':
                token.value = token.value * last.value;
                break;
            case '/':
                token.value = Math.floor(token.value / last.value);
                break;
        }
    }
    for (const { op, value } of iter) {
        if (op === '*' || op === '/') {
            tokenQ.push({ value, op });
            merge();
        } else {
            merge();
            tokenQ.push({ value, op });
        }
    }
    merge();
    return tokenQ[0].value;
};
// @lc code=end

calculate(' 3/2 ')