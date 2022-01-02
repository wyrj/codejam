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

const perRound = 360 * 12 * 10 ** 10;
const perHour = 360 * 10 ** 10;
const perMin = 6 * 10 ** 10;
const perSec = 10 ** 9;

function tickToTime(t) {
	const hour = Math.floor(t / perHour);
	t -= hour * perHour;
	const min = Math.floor(t / perMin);
	t -= min * perMin;
	const sec = Math.floor(t / perSec);
	t -= sec * perSec;
	return `${hour % 12} ${min} ${sec} ${t}`;
}

function resolve(A, B, C) {
	function test(hour, min, sec) {
		min = (min - hour + perRound) % perRound;
		sec = (sec - hour + perRound) % perRound;
		hour = 0;
		for (let r = 0; r < 12; r++) {
			if ((min + r * perRound) % 11 !== 0) {
				continue;
			}
			const time = (min + r * perRound) / 11;
			if (/*time < r * perRound || time > (r + 1) * perRound || */time * 720 % perRound !== (sec + time) % perRound) {
				continue;
			}
			return time;
		}
		return -1;
	}
	const cases = [
		[A, B, C],
		[A, C, B],
		[B, A, C],
		[B, C, A],
		[C, A, B],
		[C, B, A],
	];
	for (const [h, m, s] of cases) {
		let t = test(h, m, s);
		if (t !== -1) {
			return tickToTime(t);
		}
	}
}

async function handleCase(io, num) {
	const [A, B, C] = await io.getIntArray();
	io.printAns(num, resolve(A, B, C));
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
