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

	printLine(line) {
		console.log(line);
	}

	printAns(number, ans) {
		this.printLine(`Case #${number}: ${ans}`);
	}

	close() {
		this.rl.close();
	}
}

function resolve(x, y) {
	const negX = x < 0;
	const negY = y < 0;
	x = Math.abs(x);
	y = Math.abs(y);

	let ans = [];
	const r = (xx, yy) => {
		if (xx === 0 && yy === 0) {
			return true;
		}
		if (xx % 2 === yy % 2) {
			return false;
		}
		if (xx % 2 === 1) {
			ans.push(negX ? 'W' : 'E');
			if (r((xx - 1) / 2, yy / 2)) {
				return true;
			}
			ans.pop();
			ans.push(negX ? 'E' : 'W');
			if (r((xx + 1) / 2, yy / 2)) {
				return true;
			}
			ans.pop();
			return false;
		}
		if (yy % 2 === 1) {
			ans.push(negY ? 'S' : 'N');
			if (r(xx / 2, (yy - 1) / 2)) {
				return true;
			}
			ans.pop();
			ans.push(negY ? 'N' : 'S');
			if (r(xx / 2, (yy + 1) / 2)) {
				return true;
			}
			ans.pop();
			return false;
		}
	};
	return r(x, y) ? ans.join('') : 'IMPOSSIBLE';
}

async function handleCase(io, num) {
	const [X, Y] = await io.getIntArray();
	io.printAns(num, resolve(X, Y));
}

async function main() {
	const io = new CustomIO();
	const [T] = await io.getIntArray();

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i);
	}
	io.close();
}

main();
