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

function resolve(matrix) {
	let planValue = 0;
	const check = new Set();
	let lastRow = null;
	for (let r = 0; r < matrix.length; r++) {
		let up = lastRow;
		let left = null;
		for (let c = 0; c < matrix[0].length; c++) {
			const value = matrix[r][c];
			const node = {
				value,
				up,
				down: null,
				left,
				right: null,
			};
			if (up) {
				up.down = node;
				up = up.right;
			}
			if (left) {
				left.right = node;
			} else {
				lastRow = node;
			}
			left = node;
			planValue += value;
			check.add(node);
		}
	}

	let value = 0;
	while (check.size > 0) {
		value += planValue;
		const elimate = new Set();
		for (let node of check) {
			const {value, up, down, left, right} = node;
			let neighborCount = 0;
			let neighborValue = 0;
			if (up) {
				neighborCount += 1;
				neighborValue += up.value;
			}
			if (down) {
				neighborCount += 1;
				neighborValue += down.value;
			}
			if (left) {
				neighborCount += 1;
				neighborValue += left.value;
			}
			if (right) {
				neighborCount += 1;
				neighborValue += right.value;
			}
			if (neighborCount > 0 && neighborValue / neighborCount > value) {
				elimate.add(node);
			}
		}
		check.clear();

		for (let node of elimate) {
			const {value, up, down, left, right} = node;
			planValue -= value;
			if (up) {
				up.down = down;
				check.add(up);
			}
			if (down) {
				down.up = up;
				check.add(down);
			}
			if (left) {
				left.right = right;
				check.add(left);
			}
			if (right) {
				right.left = left;
				check.add(right);
			}
		}
		elimate.clear();
	}
	return value;
}

async function handleCase(io, num) {
	const [r] = await io.getIntArray();
	const matrix = [];
	for (let i = 0; i < r; i++) {
		matrix.push(await io.getIntArray());
	}
	io.printAns(num, resolve(matrix));
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
