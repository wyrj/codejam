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

function resolve(M, arr) {
	const sum = arr.reduce((num, { P, N }) => {
		return num + P * N;
	}, 0);
	const floor = Math.floor(sum / 2);
	for (let i = sum; i >= floor; i--) {
		let num = i;
		let remain = sum;
		for (const { P, N } of arr) {
			let n = N;
			while (n > 0 && num % P === 0) {
				num /= P;
				remain -= P;
				n -= 1;
			}
		}
		if (num === 1 && remain === i) {
			return i;
		}
	}
	return 0;
}

async function handleCase(io, num) {
	const [M] = await io.getIntArray();
	const arr = [];
	for (let i = 0; i < M; i++) {
		const [P, N] = await io.getIntArray();
		arr.push({ P, N });
	}
	io.printAns(num, resolve(M, arr));
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
