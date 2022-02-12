/*
 * @lc app=leetcode id=127 lang=typescript
 *
 * [127] Word Ladder
 */

// @lc code=start
interface CustomNode {
    word: string;
    neighbor: Set<CustomNode>;
}
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const isNeighbor = (w1: string, w2: string): boolean => {
        let hasDiff = false;
        for (let i = 0; i < w1.length; i++) {
            if (w1.charAt(i) !== w2.charAt(i)) {
                if (hasDiff) {
                    return false;
                }
                hasDiff = true;
            }
        }
        return hasDiff;
    }
    const nodeCollection = wordList.map((word) => ({ word, neighbor: new Set<CustomNode>() }));
    let endNode = nodeCollection.find(n => n.word === endWord);
    if (!endNode || beginWord === endWord) {
        return 0;
    }
    let beginNode = nodeCollection.find(n => n.word === beginWord);
    if (!beginNode) {
        beginNode = { word: beginWord, neighbor: new Set() };
        nodeCollection.push(beginNode);
    }
    for (let i = 0; i < nodeCollection.length; i++) {
        const node = nodeCollection[i];
        for (let j = i + 1; j < nodeCollection.length; j++) {
            if (isNeighbor(node.word, nodeCollection[j].word)) {
                node.neighbor.add(nodeCollection[j]);
                nodeCollection[j].neighbor.add(node);
            }
        }
    }
    let depth = 1;
    let bfsQueue = [beginNode];
    const visited = new Set<CustomNode>();
    while (bfsQueue.length > 0) {
        depth += 1;
        const nextQueue = [];
        for (const node of bfsQueue) {
            for (const nei of node.neighbor) {
                if (!visited.has(nei)) {
                    if (nei === endNode) {
                        return depth;
                    }
                    nextQueue.push(nei);
                    visited.add(nei);
                }
            }
        }
        bfsQueue = nextQueue;
    }
    return 0;
};
// @lc code=end

