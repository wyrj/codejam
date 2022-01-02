
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
		});

		rl.on('line', (line) => this.readData(line));
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

	printLine(line) {
		console.log(line);
	}

	printAns(number, ans) {
		this.printLine(`Case #${number}: ${ans}`);
	}
}

function resolve(N, square) {
	let t = 0, r = 0, c = 0;
	for (let i = 0; i < N; i++) {
		const rowSet = new Set(square[i]);
		const colSet = new Set();
		for (let j = 0; j < N; j++) {
			colSet.add(square[j][i]);
		}
		r += (rowSet.size === N ? 0 : 1);
		c += (colSet.size === N ? 0 : 1);
		t += square[i][i];
	}
	return `${t} ${r} ${c}`;
}

async function handleCase(io, num) {
	let N = parseInt(await io.getLine(), 10);
	const square = [];
	for (let i = 0; i < N; i++) {
		const row = await io.getLine();
		square.push(row.split(' ').map((n) => parseInt(n, 10)));
	}
	io.printAns(num, resolve(N, square));
}

async function main() {
	const io = new CustomIO();
	const T = parseInt(await io.getLine(), 10);

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i);
	}
}

main();
