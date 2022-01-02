
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

async function handleCase(io, B) {
	let flipIndex = -1, reverseIndex = -1;
	let low = 0, high = B - 1;
	let queryCount = 0;
	let output = new Array(B);
	
	const query = async (index) => {
		queryCount += 1;
		io.printLine(`${index + 1}`);
		return await parseInt(await io.getLine(), 10);
	};

	const flipBit = (bit) => {
		return bit ? 0 : 1;
	};

	const reverse = () => {
		output.reverse();
	};

	const flip = () => {
		output = output.map(flipBit);
	};

	const judge = async () => {
		let needFlip = false;
		if (flipIndex !== -1) {
			needFlip = output[flipIndex] !== await query(flipIndex);
		} else {
			await query(0);
		}

		let needReverse = false;
		if (reverseIndex !== -1) {
			const reverseValue = output[reverseIndex];
			const newReverseValue = await query(reverseIndex);
			needReverse = needFlip ? reverseValue === newReverseValue : reverseValue !== newReverseValue;
		} else {
			await query(0);
		}

		if (needFlip) {
			flip();
		}
		if (needReverse) {
			reverse();
		}
	};

	while (low <= high) {
		if (queryCount % 10 === 0) {
			await judge();
		}

		const lowBit = await query(low);
		const highBit = await query(high);
		if (flipIndex === -1 && lowBit === highBit) {
			flipIndex = low;
		} else if (reverseIndex === -1 && lowBit !== highBit) {
			reverseIndex = low;
		}
		output[low] = lowBit;
		output[high] = highBit;
		low += 1;
		high -= 1;
	}

	while (queryCount < 150) {
		if (queryCount % 10 === 0) {
			await judge();
		}
		await query(0);
	}

	io.printLine(output.join(''));
	
	const result = await io.getLine();
	return result[0] === 'Y';
}

async function main() {
	const io = new CustomIO();
	const line = (await io.getLine()).split(' ');
	const T = parseInt(line[0], 10);
	const B = parseInt(line[1], 10);

	for (let i = 1; i <= T; i++) {
		if (await handleCase(io, B) === false) {
			break;
		}
	}
	io.close();
}

main();
