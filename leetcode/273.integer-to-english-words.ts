/*
 * @lc app=leetcode id=273 lang=typescript
 *
 * [273] Integer to English Words
 */

// @lc code=start
function numberToWords(num: number): string {
  if (num === 0) {
    return 'Zero';
  }
  const LESS_THAN_20 = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];
  const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const THOUSANDS = ["", "Thousand", "Million", "Billion"];

  function foo(n: number): string {
    const ans: string[] = [];
    if (n >= 100) {
      ans.push(`${LESS_THAN_20[Math.floor(n / 100)]} Hundred`);
    }
    const ten = n % 100;
    if (ten >= 20) {
      ans.push(TENS[Math.floor(ten / 10)]);
      if (ten % 10 > 0) {
        ans.push(LESS_THAN_20[ten % 10]);
      }
    } else if (ten > 0) {
      ans.push(LESS_THAN_20[ten])
    }
    return ans.join(' ');
  }
  const ans: string[] = [];
  let i = 0;
  while (num > 0) {
    const r = foo(num % 1000);
    if (r) {
      ans.push(i === 0 ? r : `${r} ${THOUSANDS[i]}`);
    }
    i += 1;
    num = Math.floor(num / 1000);
  }
  return ans.reverse().join(' ');
};
// @lc code=end

