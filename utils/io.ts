import ReadLine from "readline";

export class CustomIO {
  private input: string[];
  private waitingResolve: (s: string) => void | null;
  private rl: ReadLine.Interface;

  constructor() {
    this.input = [];
    this.waitingResolve = null;

    this.rl = this.initReadline();
  }

  private initReadline(): ReadLine.Interface {
    const rl = ReadLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', (line) => this.readData(line));
    return rl;
  }

  private readData(data: string): void {
    if (this.waitingResolve) {
      this.waitingResolve(data);
      this.waitingResolve = null;
    } else {
      this.input.push(data);
    }
  }

  public async getLine(): Promise<string> {
    if (this.input.length > 0) {
      return this.input.shift();
    }
    return new Promise((resolve) => {
      this.waitingResolve = resolve;
    });
  }

  public async getIntArray(): Promise<number[]> {
    const line = await this.getLine();
    return line.split(' ').map((s) => parseInt(s, 10));
  }

  public printLine(line: string) {
    console.log(line);
  }

  public printAns(number: number, ans: string, nextLine: boolean = false) {
    this.printLine(`Case #${number}:${nextLine ? '\n' : ' '}${ans}`);
  }

  public close() {
    this.rl.close();
    process.exit(0);
  }
}