/*
 * @lc app=leetcode id=999 lang=typescript
 *
 * [999] Available Captures for Rook
 */

// @lc code=start
function numRookCaptures(board: string[][]): number {
    const { ri, rj } = (function() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board[i][j] === 'R') {
                    return { ri: i, rj: j };
                }
            }
        }
        throw new Error('no rook');
    })();

    let count = 0;
    const checker = (deltaI: number, deltaJ: number): number => {
        let i = ri + deltaI;
        let j = rj + deltaJ;
        while (0 <= i && i <= 7 && 0 <= j && j <= 7) {
            if (board[i][j] === 'B') {
                return 0;
            } else if (board[i][j] === 'p') {
                return 1;
            }
            i += deltaI;
            j += deltaJ;
        }
        return 0;
    }
    count += checker(-1, 0);
    count += checker(1, 0);
    count += checker(0, -1);
    count += checker(0, 1);
    return count;
};
// @lc code=end
