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

function greaterThan(a, b) {
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return a[i] > b[i];
		}
	}
	return false;
}

function resolve(N, X) {
	if (N <= 1) {
		return 0;
	}
	let count = 0;
	let lastStr = X[0];
	for (let i = 1; i < N; i++) {
		const currStr = X[i];
		if (currStr.length > lastStr.length) {
			lastStr = currStr;
			continue;
		}
		if (!lastStr.startsWith(currStr) || /^[9]*$/.test(lastStr.slice(currStr.length))) {
			const lastStrPre = lastStr.slice(0, currStr.length);
			const addition = greaterThan(currStr, lastStrPre) ? 0 : 1;
			count += lastStr.length - currStr.length + addition;
			lastStr = currStr.padEnd(lastStr.length + addition, '0');
			continue;
		}

		count += lastStr.length - currStr.length;
		let tail = '';
		for (let j = lastStr.length - 1; j >= 0; j--) {
			if (lastStr.charAt(j) !== '9') {
				tail = String.fromCharCode(lastStr.charCodeAt(j) + 1) + tail;
				break;
			} else {
				tail += '0';
			}
		}
		lastStr = lastStr.slice(0, lastStr.length - tail.length) + tail;
	}
	return count;
}

async function handleCase(io, num) {
	const [N] = await io.getIntArray();
	const line = await io.getLine();
	io.printAns(num, resolve(N, line.split(' ')));
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
