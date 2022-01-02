
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

function resolve(activities) {
	activities.forEach((act, index) => {
		act.index = index;
	});
	activities.sort((lhs, rhs) => {
		return lhs.start - rhs.start || lhs.end - rhs.end;
	});

	let output = [];
	let cEnd = 0, jEnd = 0;
	for (let {start, end, index} of activities) {
		if (start >= cEnd) {
			output[index] = 'C';
			cEnd = end;
		} else if (start >= jEnd) {
			output[index] = 'J';
			jEnd = end;
		} else {
			return 'IMPOSSIBLE';
		}
	}
	return output.join('');
}

async function handleCase(io, num) {
	const N = parseInt(await io.getLine(), 10);
	const activities = [];
	for (let i = 0; i < N; i++) {
		const line = (await io.getLine()).split(' ');
		activities.push({
			start: parseInt(line[0], 10),
			end: parseInt(line[1], 10),
		});
	}
	io.printAns(num, resolve(activities));
}

async function main() {
	const io = new CustomIO();
	const T = parseInt(await io.getLine(), 10);

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i);
	}
}

main();
