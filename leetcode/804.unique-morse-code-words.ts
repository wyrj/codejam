/*
 * @lc app=leetcode id=804 lang=typescript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
  const code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const base = 'a'.charCodeAt(0);
  const set = new Set<string>();
  for (const word of words) {
    let s = '';
    for (let i = 0; i < word.length; i++) {
      s = s + code[word.charCodeAt(i) - base];
    }
    set.add(s);
  }
  return set.size;
};
// @lc code=end

