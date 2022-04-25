import { main } from '../../../utils/main';

main(async (io) => {
  await io.getIntArray();
  const D = await io.getIntArray();

  let last = 0;
  let count = 0;
  while (D.length > 0) {
    const f = D[0];
    const l = D[D.length - 1];
    const min = Math.min(last, f, l);
    if (min === last) {
      if (f < l) {
        last = f;
        D.shift();
      } else {
        last = l;
        D.pop();
      }
      count += 1;
    } else if (min === f) {
      D.shift();
    } else {
      D.pop();
    }
  }
  return `${count}`;
});