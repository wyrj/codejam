/**
 * @param {number[]} F
 * @param {number[]} P
 */
function resolve(F, P) {
  const nodes = Array.from(
    { length: F.length + 1 },
    () => new Set(),
  )
  for (let i = 0; i < F.length; i++) {
    nodes[P[i]].add(i + 1);
  }
  function dfs(idx) {
    const childSet = nodes[idx];
    const fValue = F[idx - 1];
    if (childSet.size === 0) {
      return { pick: [fValue], replaceable: [fValue] };
    }
    let pick = [];
    let replaceable = [];
    let min = fValue;
    for (const result of Array.from(childSet, dfs)) {
      pick = pick.concat(result.pick);
      replaceable = replaceable.concat(result.replaceable);
      min = Math.min(min, ...result.replaceable);
    }
    if (min < fValue) {
      const index = pick.findIndex((v) => v === min);
      pick[index] = fValue;
      replaceable = [fValue];
    }
    return { pick, replaceable };
  }
  return dfs(0).pick.reduce((s, v) => s + v, 0);
}

async function handleCase(io, num) {
  await io.getIntArray();
  const F = await io.getIntArray();
  const P = await io.getIntArray();
  io.printAns(num, resolve(F, P));
}

require('../../../template').main(handleCase);
