/*
 * @lc app=leetcode id=212 lang=typescript
 *
 * [212] Word Search II
 */

// @lc code=start
interface TrieNode {
  isWord: boolean;
  children: Map<string, TrieNode>;
}
function findWords(board: string[][], words: string[]): string[] {
  const root: TrieNode = { isWord: false, children: new Map<string, TrieNode>() };
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let n = node.children.get(char);
      if (!n) {
        n = { isWord: false, children: new Map() };
        node.children.set(char, n);
      }
      node = n;
    }
    node.isWord = true;
  }

  const ans: string[] = [];
  function dfs(i: number, j: number, word: string, node: TrieNode): void {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return;
    }
    const c = board[i][j];
    const nextNode = node.children.get(c);
    if (!nextNode) {
      return;
    }
    const nextWord = `${word}${c}`;
    if (nextNode.isWord) {
      ans.push(nextWord);
      nextNode.isWord = false;
    }
    board[i][j] = '#';
    dfs(i - 1, j, nextWord, nextNode);
    dfs(i + 1, j, nextWord, nextNode);
    dfs(i, j - 1, nextWord, nextNode);
    dfs(i, j + 1, nextWord, nextNode);
    board[i][j] = c;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(i, j, '', root);
    }
  }
  return ans;
};
// @lc code=end

