import { main } from '../../../utils/main';

main(async (io) => {
  const S = await io.getLine();

  const ans: string[] = [];
  let contiCount = 1;
  for (let i = 0; i < S.length - 1; i++) {
    ans.push(S[i]);
    if (S[i] === S[i + 1]) {
      contiCount += 1;
    } else {
      if (S.charCodeAt(i) < S.charCodeAt(i + 1)) {
        for (let j = 0; j < contiCount; j++) {
          ans.push(S[i]);
        }
      }
      contiCount = 1;
    }
  }
  ans.push(S[S.length - 1]);
  return ans.join('');
});