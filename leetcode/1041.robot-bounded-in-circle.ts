/*
 * @lc app=leetcode id=1041 lang=typescript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start
enum DIRECTION {
    n = 'n',
    e = 'e',
    w = 'w',
    s = 's',
}
enum INSTRUCTION {
    G = 'G',
    L = 'L',
    R = 'R',
}
function isRobotBounded(instructions: string): boolean {
    const coord: { x: number, y: number } = { x: 0, y: 0 };
    let dir = DIRECTION.n;
    const turnLeftMap: Record<DIRECTION, DIRECTION> = {
        [DIRECTION.n]: DIRECTION.w,
        [DIRECTION.e]: DIRECTION.n,
        [DIRECTION.w]: DIRECTION.s,
        [DIRECTION.s]: DIRECTION.e,
    }
    const turnRightMap: Record<DIRECTION, DIRECTION> = {
        [DIRECTION.n]: DIRECTION.e,
        [DIRECTION.e]: DIRECTION.s,
        [DIRECTION.w]: DIRECTION.n,
        [DIRECTION.s]: DIRECTION.w,
    }
    const goMap: Record<DIRECTION, { type: 'x' | 'y', delta: 1 | -1 }> = {
        [DIRECTION.n]: { type: 'y', delta: 1 },
        [DIRECTION.e]: { type: 'x', delta: 1 },
        [DIRECTION.w]: { type: 'x', delta: -1 },
        [DIRECTION.s]: { type: 'y', delta: -1 },
    }
    for (const i of instructions) {
        if (i === INSTRUCTION.L) {
            dir = turnLeftMap[dir];
        } else if (i === INSTRUCTION.R) {
            dir = turnRightMap[dir];
        } else {
            const { type, delta } = goMap[dir];
            coord[type] += delta;
        }
    }
    return (coord.x === 0 && coord.y === 0) || dir !== DIRECTION.n;
};
// @lc code=end