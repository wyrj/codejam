const fs = require('fs');

const perRound = 3600 * 12 * 10 ** 9;
function tickToInput(t) {
	return `${t} ${t * 12 % perRound} ${t * 720 % perRound}`;
}

const input = ['100'];
const output = [];
for (let i = 0; i < 100; i++) {
	const hour = Math.floor(Math.random() * 12);
	const min = Math.floor(Math.random() * 60);
	const sec = Math.floor(Math.random() * 60);
	const tick = hour * 3600 * 10 ** 9 + min * 60 * 10 ** 9 + sec * 10 ** 9;
	input.push(tickToInput(tick));
	output.push(`Case #${i + 1}: ${hour} ${min} ${sec} 0`);
}
fs.writeFileSync('input2', input.join('\n'));
fs.writeFileSync('output2', output.join('\n'));
