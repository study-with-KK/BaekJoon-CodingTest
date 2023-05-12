// N번째 큰 수
const [n, ...arr] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(/\s/)
	.filter((item) => item !== '')
	.map(Number);

const result = [];

for (let i = 0; i < n; i++) {
	result.push(
		arr
			.slice(i * 10, (i + 1) * 10)
			.sort((a, b) => a - b)
			.at(-3)
	);
}

console.log(...result);
