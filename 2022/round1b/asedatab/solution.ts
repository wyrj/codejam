import { interaction } from "../../../utils/interaction";

interaction(async (io) => {
  io.printLine('11111111');
  for (let i = 0; i < 300; i++) {
    const [N] = await io.getIntArray();
    if (N === 0) {
      break;
    } else if (N === -1) {
      io.close();
      return;
    }
    if (N % 2 === 1) {
      if (N === 1) {
        io.printLine('00010101');
      } else if (N === 3) {
        io.printLine('')
      }
    } else if (N === 8) {
      io.printLine('11111111');
    } else if (N === 6) {
      io.printLine('11101110')
    } else if (N === 4) {
      io.printLine('01010101');
    } else if (N === 2) {
      io.printLine('00010001')
    }
  }
});