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

function flip(s) {
	let f = '';
	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === 'T') {
			f += 'F';
		} else {
			f += 'T';
		}
	}
	return f;
}

function resolve(N, Q, arr) {
	arr.sort((lhs, rhs) => lhs.S - rhs.S);
	if ((Q - arr[0].S) > arr[N - 1].S) {
		return `${flip(arr[0].A)} ${Q - arr[0].S}/1`;
	} else {
		return `${arr[N - 1].A} ${arr[N - 1].S}/1`;
	}
}

async function handleCase(io, num) {
	const [N, Q] = await io.getIntArray();
	const arr = [];
	for (let i = 0; i < N; i++) {
		const line = await io.getLine();
		const [A, S] = line.split(' ');
		arr.push({
			A,
			S: Number(S),
		});
	}
	io.printAns(num, resolve(N, Q, arr));
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
