/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
    const versions1 = version1.split('.');
    const versions2 = version2.split('.');
    const len = Math.min(versions1.length);
    for (let i = 0; i < len; i++) {
        const v1 = parseInt(versions1[i], 10);
        const v2 = parseInt(versions2[i], 10);
        if (v1 > v2) {
            return 1;
        } else if (v2 > v1) {
            return -1;
        }
    }
    for (let i = len; i < versions1.length; i++) {
        if (parseInt(versions1[i], 10) > 0) {
            return 1;
        }
    }
    for (let i = len; i < versions2.length; i++) {
        if (parseInt(versions2[i], 10) > 0) {
            return -1;
        }
    }
    return 0;
};
// @lc code=end

