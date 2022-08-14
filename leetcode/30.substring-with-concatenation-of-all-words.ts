/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  const ans: number[] = [];
  const unitLen = words[0].length;
  for (let i = 0; i < unitLen; i++) {
    const wordCount = Math.floor((s.length - i) / unitLen);
    if (wordCount < words.length) {
      break;
    }
    let countDown = words.length;
    const countDownMap = new Map(map.entries());
    const slicedWords = Array.from({ length: wordCount }, (_, idx) => {
      return s.slice(i + idx * unitLen, i + (idx + 1) * unitLen);
    })
    for (let j = 0; j < slicedWords.length; j++) {
      const str = slicedWords[j];
      const v = countDownMap.get(str);
      if (v !== undefined) {
        countDownMap.set(str, v - 1);
        if (v > 0) {
          countDown -= 1;
        }
      }
      if (j >= words.length) {
        const str = slicedWords[j - words.length];
        const v = countDownMap.get(str);
        if (v !== undefined) {
          countDownMap.set(str, v + 1);
          if (v >= 0) {
            countDown += 1;
          }
        }
      }
      if (countDown === 0) {
        ans.push(i + (j - words.length + 1) * unitLen);
      }
    }
  }
  return ans;
};
// @lc code=end

findSubstring('barfoothefoobarman', ['foo', 'bar']);