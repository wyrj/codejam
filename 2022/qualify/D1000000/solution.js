/**
 * @param {number[]} S
 */
function resolve(S) {
  S.sort((lhs, rhs) => lhs - rhs);
  let minDiff = 0;
  for (let i = 0; i < S.length; i++) {
    minDiff = Math.min(S[i] - (i + 1), minDiff);
  }
  return S.length + minDiff;
}

async function handleCase(io, num) {
  const [N] = await io.getIntArray();
  const S = await io.getIntArray();
  io.printAns(num, resolve(S));
}

require('../../../template').main(handleCase);
