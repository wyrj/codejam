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

function resolve(X, Y, M) {
	let queue = [{x: 0, y: 0}];
	const p = {x:X, y:Y};
	let depth = 0;

	const map = {};
	const add = (x, y) => {
		if (map[x] && map[x][y]) {
			return false;
		}
		if (!map[x]) {
			map[x] = {};
		}
		map[x][y] = true;
		return true;
	};
	while(depth <= M.length) {
		const newQueue = [];
		for (const {x, y} of queue) {
			if (x === p.x && y === p.y) {
				return depth;
			}
			const dis = Math.abs(x - p.x) + Math.abs(y - p.y);
			if (dis > (M.length - depth) * 2) {
				continue;
			}
			if (dis % 2 === 1) {
				newQueue.push({x, y});
				break;
			}
			if (x > p.x && add(x - 1, y)) {
				newQueue.push({x: x - 1, y});
			} else if (x < p.x && add(x + 1, y)) {
				newQueue.push({x: x + 1, y});
			}
			if (y > p.y && add(x, y - 1)) {
				newQueue.push({x, y: y - 1});
			} else if (y < p.y && add(x, y + 1)) {
				newQueue.push({x, y: y + 1});
			}
		}
		queue = newQueue;
		switch (M.charAt(depth)) {
			case 'S':
				p.y -= 1;
				break;
			case 'N':
				p.y += 1;
				break;
			case 'E':
				p.x += 1;
				break;
			case 'W':
				p.x -= 1;
				break;
		}
		depth += 1;
	}
	return 'IMPOSSIBLE';
}

async function handleCase(io, num) {
	const [X, Y, M] = (await io.getLine()).split(' ');
	io.printAns(num, resolve(parseInt(X, 10), parseInt(Y, 10), M));
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
