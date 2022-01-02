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

function resolve(U, M) {
	const getOneValue = (set) => {
		const iter = set.values();
		return iter.next().value;
	};

	const charSet = new Set();
	for (const {r} of M) {
		if (charSet.size === 10) {
			break;
		}
		for (const c of r) {
			charSet.add(c);
		}
	}

	const can = new Array(10).fill(null).map((_) => {
		return new Set(charSet);
	});

	for (const {q, r} of M) {
		if (q.length > r.length) {
			continue;
		}

		can[0].delete(r[0]);
		for (let i = parseInt(q[0], 10) + 1; i < 10; i++) {
			can[i].delete(r[0]);
		}
	}

	const oneSizeCan = can.filter(s => s.size === 1);
	while (oneSizeCan.length > 0) {
		const def = getOneValue(oneSizeCan.pop());
		for (const s of can) {
			if (s.size === 1) {
				continue;
			}
			s.delete(def);
			if (s.size === 1) {
				oneSizeCan.push(s);
			}
		}
	}
	return can.map((s) => getOneValue(s)).join('');
}

function resolve2(U, M) {
	const map = new Map();
	for (const {r} of M) {
		if (r.length !== U) {
			continue;
		}
		let c = r[0];
		const count = (map.has(c) ? map.get(c) : 0) + 1;
		map.set(c, count);
	}
	let zero = (() => {
		for (const {r} of M) {
			for (let c of r) {
				if (!map.has(c)) {
					return c;
				}
			}
		}
	})();
	const arr = [];
	map.forEach((value, key) => {
		arr.push({key, value});
	});
	arr.sort((lhs, rhs) => {
		return rhs.value - lhs.value;
	});
	return zero + arr.map((o) => {
		return o.key;
	}).join('');
}

async function handleCase(io, num) {
	const [U] = await io.getIntArray();
	const arr = [];
	for (let i = 0; i < 10000; i++) {
		const [q, r] = (await io.getLine()).split(' ');
		arr.push({q, r});
	}
	io.printAns(num, resolve2(U, arr));
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
