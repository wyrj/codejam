class CustomIO {
  constructor() {
    this.input = [];
    this.waitingResolve = null;

    this.rl = this.initReadline();
  }

  initReadline() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', (line) => this.readData(line));
    rl.on('close', () => {
      process.exit(0);
    });
    return rl;
  }

  readData(data) {
    if (this.waitingResolve) {
      this.waitingResolve(data);
      this.waitingResolve = null;
    } else {
      this.input.push(data);
    }
  }

  async getLine() {
    if (this.input.length > 0) {
      return this.input.shift();
    }
    return new Promise((resolve) => {
      this.waitingResolve = resolve;
    });
  }

  async getIntArray() {
    const line = await this.getLine();
    return line.split(' ').map((s) => parseInt(s, 10));
  }

  /**
   * @param {string} line
   */
  printLine(line) {
    console.log(line);
  }

  /**
   * @param {number} number
   * @param {string} ans
   * @param {boolean=} nextLine
   */
  printAns(number, ans, nextLine = false) {
    this.printLine(`Case #${number}:${nextLine ? '\n' : ' '}${ans}`);
  }

  close() {
    this.rl.close();
  }
}

/**
 * @param {(io: CustomIO, c: number) => Promise<void>} handleCase
 */
async function main(handleCase) {
  const io = new CustomIO();
  const [T] = await io.getIntArray();

  for (let i = 1; i <= T; i++) {
    await handleCase(io, i);
  }
  io.close();
}

module.exports = { CustomIO, main };