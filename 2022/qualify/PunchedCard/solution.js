function resolve(R, C) {
  function genLine(first, char, deli) {
    const arr = new Array(C).fill(char);
    if (!first) {
      arr.push(char);
    }
    const str = arr.join(deli);
    return first ? `..${str}` : str;
  }
  function splitLine(first) {
    return genLine(first, '+', '-');
  }
  function contentLine(first) {
    return genLine(first, '|', '.');
  }
  const ans = [];
  for (let r = 0; r < R; r++) {
    ans.push(splitLine(r === 0), contentLine(r === 0));
  }
  ans.push(splitLine(false));
  return ans.join('\n');
}

async function handleCase(io, num) {
  const [R, C] = await io.getIntArray();
  io.printAns(num, resolve(R, C), true);
}

require('../../../template').main(handleCase);
