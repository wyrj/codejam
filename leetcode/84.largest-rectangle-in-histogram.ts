/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
type StackNode = {
    height: number,
    popCount: number,
};
function largestRectangleArea(heights: number[]): number {
    let max = 0;
    const stack: StackNode[] = [];
    heights.push(0);
    for (const height of heights) {
        let popCount = 0;
        while (stack.length > 0 && stack[stack.length - 1].height > height) {
            const last = stack.pop();
            popCount += 1 + last.popCount;
            max = Math.max(
                max,
                last.height * popCount,
            );
        }
        stack.push({ height, popCount: popCount, });
    }
    return max;
};
// @lc code=end

largestRectangleArea([3,6,5,7,4,8,1,0]);