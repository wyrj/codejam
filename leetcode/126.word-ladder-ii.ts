/*
 * @lc app=leetcode id=126 lang=typescript
 *
 * [126] Word Ladder II
 */

// @lc code=start
interface BNode {
  dpeth: number;
  word: string;
  neighbor: Set<BNode>;
}

function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  function isNeighbor(w1: string, w2: string): boolean {
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
  const map = new Map<string, BNode>();
  function ensureBNode(word: string): BNode {
    let node = map.get(word);
    if (!node) {
      node = { dpeth: -1, word, neighbor: new Set() };
      map.set(word, node);
    }
    return node;
  }
  const list = [beginWord, ...wordList];
  for (let i = 0; i < list.length; i++) {
    const si = list[i];
    const ni = ensureBNode(si);
    for (let j = i + 1; j < list.length; j++) {
      if (isNeighbor(list[i], list[j])) {
        const nj = ensureBNode(list[j]);
        ni.neighbor.add(nj);
        nj.neighbor.add(ni);
      }
    }
  }
  if ((map.get(endWord)?.neighbor.size ?? 0) === 0) {
    return [];
  }
  function setDepth(): void {
    const n = ensureBNode(beginWord);
    const visit = new Set([n]);
    n.dpeth = 0;
    const queue = [n];
    while (queue.length > 0) {
      const curr = queue.shift() as BNode;
      for (const node of curr.neighbor) {
        if (visit.has(node)) {
          continue;
        }
        visit.add(node);
        node.dpeth = curr.dpeth + 1;
        queue.push(node);
      }
    }
  }
  setDepth();

  const ans: string[][] = [];
  function dfs(n: BNode, path: string[]): void {
    path.push(n.word)
    if (n.word === beginWord) {
      ans.push(path.slice().reverse());
    } else {
      for (const next of n.neighbor) {
        if (next.dpeth === n.dpeth - 1) {
          dfs(next, path);
        }
      }
    }
    path.pop();
  }
  dfs(ensureBNode(endWord), []);
  return ans;
};
// @lc code=end

findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);