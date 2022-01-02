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

function resolve(R, S) {
	const len = R * S;
	const deck = new Array(len).fill(null).map((_, idx) => (idx % R));
	const step = [];

	const findIndex = (start, value) => {
		let idx = start;
		while (idx < len && deck[idx] !== value) {
			idx += 1;
		}
		while (idx < len && deck[idx] === value) {
			idx += 1;
		}
		return idx;
	};
	const swap = (m, n) => {
		step.push(`${m} ${n}`);
		const temp = deck.splice(m, n);
		deck.splice(0, 0, ...temp);
	};

	while (true) {
		let m = findIndex(0, (deck[0] + 1) % R);
		if (m === len) {
			break;
		}
		let n = findIndex(m, deck[0]);
		if (n === len) {
			m = findIndex(0, R - 1);
			if (m !== len) {
				swap(m, len - m);
			}
			break;
		}
		swap(m, n - m);
	}

	step.unshift(step.length);
	return step.join('\n');
}

async function handleCase(io, num) {
	const [R, S] = await io.getIntArray();
	io.printAns(num, resolve(R, S));
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
