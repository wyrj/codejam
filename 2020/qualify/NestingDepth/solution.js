
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

function resolve(input) {
	let output = '';
	const length = input.length;
	let curr = 0;
	for (let i = 0; i < length; i++) {
		const next = parseInt(input[i], 10);
		if (next === curr) {
			output += `${curr}`;
		} else if (next > curr) {
			output += '('.repeat(next - curr) + `${next}`;
		} else {
			output += ')'.repeat(curr - next) + `${next}`;
		}
		curr = next;
	}
	if (curr > 0) {
		output += ')'.repeat(curr);
	}
	return output;
}

async function handleCase(io, num) {
	const S = await io.getLine();
	io.printAns(num, resolve(S));
}

async function main() {
	const io = new CustomIO();
	const T = parseInt(await io.getLine(), 10);

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i);
	}
}

main();
