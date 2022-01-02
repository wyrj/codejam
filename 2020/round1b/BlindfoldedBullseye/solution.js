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

const RESULT = {
	CENTER: 'CENTER',
	HIT: 'HIT',
	MISS: 'MISS',
	WRONG: 'WRONG',
};

async function resolve(io, A, B) {
	const dart = async (x, y) => {
		io.printLine(`${x} ${y}`);
		const result = await io.getLine();
		return result;
	};
	const e9 = 1000000000;
	let find = false;

	const checkResult = (result) => {
		if (result === RESULT.CENTER || result === RESULT.WRONG) {
			find = true;
			return true;
		}
		return false;
	};

	const [hitX, hitY] = await (async () => {
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				const result = await dart(e9 / 2 * i, e9 / 2 * j);
				if (checkResult(result)) {
					return [];
				} else if (result === RESULT.HIT) {
					return [e9 / 2 * i, e9 / 2 * j];
				}
			}
		}
	})();

	const bs = async (low, high, callback) => {
		while (low < high) {
			const mid = Math.floor((low + high) / 2);
			const result = await callback(mid);
			if (result === 0) {
				return mid;
			} else if (result < 0) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}
		return low;
	};

	const right = find || await bs(hitX, e9 + 1, async (mid) => {
		const result = await dart(mid, hitY);
		if (checkResult(result)) {
			return 0;
		} else if (result === RESULT.MISS) {
			return -1;
		}
		const resultOut = mid === e9 ? RESULT.MISS : await dart(mid + 1, hitY);
		if (checkResult(resultOut)) {
			return 0;
		}
		return resultOut === RESULT.MISS ? 0 : 1;
	});

	const left = find || await bs(-e9, hitX + 1, async (mid) => {
		const result = await dart(mid, hitY);
		if (checkResult(result)) {
			return 0;
		} else if (result === RESULT.MISS) {
			return 1;
		}
		const resultOut = mid === 0 ? RESULT.MISS : await dart(mid - 1, hitY);
		if (checkResult(resultOut)) {
			return 0;
		}
		return resultOut === RESULT.MISS ? 0 : -1;
	});

	const top = find || await bs(hitY, e9 + 1, async (mid) => {
		const result = await dart(hitX, mid);
		if (checkResult(result)) {
			return 0;
		} else if (result === RESULT.MISS) {
			return -1;
		}
		const resultOut = mid === e9 ? RESULT.MISS : await dart(hitX, mid + 1);
		if (checkResult(resultOut)) {
			return 0;
		}
		return resultOut === RESULT.MISS ? 0 : 1;
	});

	const bottom = find || await bs(-e9, hitY + 1, async (mid) => {
		const result = await dart(hitX, mid);
		if (checkResult(result)) {
			return 0;
		} else if (result === RESULT.MISS) {
			return 1;
		}
		const resultOut = mid === 0 ? RESULT.MISS : await dart(hitX, mid - 1);
		if (checkResult(resultOut)) {
			return 0;
		}
		return resultOut === RESULT.MISS ? 0 : -1;
	});

	const midX = Math.floor((left + right) / 2);
	const midY = Math.floor((top + bottom) / 2);
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 2; j++) {
			if (checkResult(await dart(midX + i, midY + j))) {
				return;
			}
		}
	}
}

async function handleCase(io, num, A, B) {
	await resolve(io, A, B);
}

async function main() {
	const io = new CustomIO();
	const [T, A, B] = await io.getIntArray();

	for (let i = 1; i <= T; i++) {
		await handleCase(io, i, A, B);
	}
	io.close();
}

main();
