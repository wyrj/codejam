function resolve(ink) {
  const minInk = [];
  for (let i = 0; i < 4; i++) {
    minInk.push(Math.min(ink[0][i], ink[1][i], ink[2][i]));
  }
  const sum = minInk.reduce((s, v) => s + v, 0);
  if (sum < 1e6) {
    return 'IMPOSSIBLE';
  }
  let sub = sum - 1e6;
  for (let i = 0; i < 4 && sub > 0; i++) {
    const min = Math.min(minInk[i], sub);
    sub -= min;
    minInk[i] -= min;
  }
  return minInk.join(' ');
}

async function handleCase(io, num) {
  const ink = [];
  for (let i = 0; i < 3; i++) {
    ink.push(await io.getIntArray());
  }
  io.printAns(num, resolve(ink));
}

require('../../../template').main(handleCase);
