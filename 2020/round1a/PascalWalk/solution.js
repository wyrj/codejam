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

const pascalTable = [];

function getValue(i, j) {
	if (!pascalTable[i]) {
		pascalTable[i] = [];
	}
	if (pascalTable[i][j]) {
		return pascalTable[i][j];
	}
	const value = (j === 1 || j === i) ? 1 : (getValue(i - 1, j - 1) + getValue(i - 1, j));
	return pascalTable[i][j] = value
}

function resolve(N) {
	if (N <= 500) {
		return '\n' + new Array(N).fill(null).map((n, idx) => {
			return `${idx + 1} 1`;
		}).join('\n');
	}
	const bit = N - 30;

	const path = [''];
	let left = true;

	const pushEdge = (r) => {
		if (left) {
			path.push(`${r} 1`);
		} else {
			path.push(`${r} ${r}`);
		}
		N -= 1;
	};

	const pushRow = (r) => {
		for (let i = 0; i < r; i++) {
			path.push(`${r} ${left ? i + 1 : r - i}`);
		}
		left = !left;
		N -= Math.pow(2, r - 1);
	};

	for (let i = 0; i < 30 && N > 0; i++) {
		if ((bit & 1 << i) === 0) {
			pushEdge(i + 1);
		} else {
			pushRow(i + 1);
		}
	}
	let curr = 31;
	while (N > 0) {
		pushEdge(curr++);
	}
	return path.join('\n');
}

async function handleCase(io, num) {
	const N = (await io.getIntArray())[0];
	io.printAns(num, resolve(N));
}

async function main() {
	const io = new CustomIO();
	const T = parseInt(await io.getLine(), 10);

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i);
	}
	io.close();
}

main();
