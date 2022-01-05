/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
    const palindromeTable: Array<Array<boolean | undefined>> = Array.from(s, () => []);
    function isPalindrome(p: number, q: number): boolean {
        if (p >= q) {
            return true;
        } else if (palindromeTable[p][q] != undefined) {
            return palindromeTable[p][q];
        }
        return palindromeTable[p][q] = (s.charAt(p) === s.charAt(q) && isPalindrome(p + 1, q - 1));
    }
    const table: Array<Array<string[][] | undefined>> = Array.from(s, () => []);
    function recursive(p: number, q: number): string[][] {
        if (table[p][q] != undefined) {
            return table[p][q];
        }
        const result: string[][] = [];
        if (isPalindrome(p, q)) {
            result.push([s.slice(p, q + 1)]);
        }
        for (let i = p; i < q; i++) {
            if (!isPalindrome(p, i)) {
                continue;
            }
            const rightPart = recursive(i + 1, q);
            for (const rightCandidate of rightPart) {
                result.push([s.slice(p, i + 1), ...rightCandidate]);
            }
        }
        return table[p][q] = result;
    }
    return recursive(0, s.length - 1);
};
// @lc code=end
