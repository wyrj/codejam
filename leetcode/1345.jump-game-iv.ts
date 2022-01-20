/*
 * @lc app=leetcode id=1345 lang=typescript
 *
 * [1345] Jump Game IV
 */

// @lc code=start
function minJumps(arr: number[]): number {
    const indexMap = new Map<number, number[]>();
    for (let i = 0; i < arr.length; i++) {
        if (!indexMap.has(arr[i])) {
            indexMap.set(arr[i], [i]);
        } else {
            indexMap.get(arr[i]).push(i);
        }
    }
    const steps = new Array(arr.length).fill(-1);
    steps[steps.length - 1] = 0;
    let now = 1;
    let set = new Set([steps.length - 1]);
    while (steps[0] === -1) {
        const nextSet = new Set<number>();
        for (const index of set) {
            if (index > 0 && steps[index - 1] === -1) {
                steps[index - 1] = now;
                nextSet.add(index - 1);
            }
            if (index < arr.length - 1 && steps[index + 1] === -1) {
                steps[index + 1] = now;
                nextSet.add(index + 1);
            }
            if (indexMap.has(arr[index])) {
                for (const i of indexMap.get(arr[index])) {
                    if (steps[i] === -1) {
                        steps[i] = now;
                        nextSet.add(i);
                    }
                }
                indexMap.delete(arr[index]);
            }
        }
        now += 1;
        set = nextSet;
    }
    return steps[0];
};
// @lc code=end
