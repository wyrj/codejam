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

function resolve(N, D, A) {
	A = A.sort((lhs, rhs) => {
		return lhs - rhs;
	});
	let curr = -1;
	let contiCount = 1;
	for (const a of A) {
		if (a === curr) {
			contiCount += 1;
		} else {
			curr = a;
			contiCount = 1;
		}
		if (contiCount >= D) {
			return 0;
		}
	}
	if (D === 2) {
		return 1;
	} else if (D === 3) {
		let doubleIndex = A.length - 1;
		for (let i = A.length - 2; i >= 0; i--) {
			while (A[doubleIndex] > 2 * A[i]) {
				doubleIndex -= 1;
			}
			if ((A[i] === A[i + 1] && i !== A.length - 2 )|| A[i] * 2 === A[doubleIndex]) {
				return 1;
			}
		}
		return 2;
	}
	return D - 1;
}

async function handleCase(io, num) {
	const [N, D] = await io.getIntArray();
	const A = await io.getIntArray();
	io.printAns(num, resolve(N, D, A));
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
