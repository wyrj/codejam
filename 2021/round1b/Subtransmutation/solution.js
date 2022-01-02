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

function resolve(N, A, B, M) {
	const arr = M.slice();
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1 && arr[i] === 1) {
			return i + 1;
		}
		const add = Math.min(arr[i] || 0, arr[i + 1] || 0);
		if (add > 0) {
			arr[i + 2] = (arr[i + 2] || 0) + add;
			arr[i] -= add;
			arr[i + 1] -= add;
		}
		const curr = arr[i] || 0;
		if (curr > 0) {
			if (curr % 2 === 1) {
				arr[i + 1] = (arr[i + 1] || 0) + 1;
			}
			if (curr > 1) {
				arr[i + 2] = (arr[i + 2] || 0) + Math.floor(curr / 2);
			}
		}
	}
}

async function handleCase(io, num) {
	const [N, A, B] = await io.getIntArray();
	const M = await io.getIntArray();
	io.printAns(num, resolve(N, A, B, M));
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
