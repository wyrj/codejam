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

function normalize(pattern) {
	const firstStar = pattern.indexOf('*');
	const lastStar = pattern.lastIndexOf('*');
	const head = pattern.slice(0, firstStar);
	const tail = pattern.slice(lastStar + 1);
	const body = pattern.slice(firstStar + 1, lastStar).replace(/\*/g, '');
	return {head, body, tail};
}

function resolve(patterns) {
	const arr = patterns.map(normalize);
	let currHead = '';
	let currBody = '';
	let currTail = '';
	for (let {head, body, tail} of arr) {
		if (head) {
			if (!currHead) {
				currHead = head;
			} else {
				if (currHead.length >= head.length) {
					if (!currHead.startsWith(head)) {
						return '*';
					}
				} else {
					if (!head.startsWith(currHead)) {
						return '*';
					}
					currHead = head;
				}
			}
		}
		if (body) {
			currBody += body;
		}
		if (tail) {
			if (!currTail) {
				currTail = tail;
			} else {
				if (currTail.length >= tail.length) {
					if (!currTail.endsWith(tail)) {
						return '*';
					}
				} else {
					if (!tail.endsWith(currTail)) {
						return '*';
					}
					currTail = tail;
				}
			}
		}
	}
	return `${currHead}${currBody}${currTail}`;
}

async function handleCase(io, num) {
	const N = parseInt(await io.getLine(), 10);
	const pattern = [];
	for (let i = 0; i < N; i++) {
		pattern.push(await io.getLine());
	}
	io.printAns(num, resolve(pattern));
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
