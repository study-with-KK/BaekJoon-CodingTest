// 쉽게 푸는 문제

const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const numberArr = [];

for (let i = 1; i <= 1000; i++) {
	Array.from({ length: i }, (_, idx) => numberArr.push(i));
}

console.log(
	numberArr.slice(input[0] - 1, input[1]).reduce((prev, curr) => prev + curr, 0)
);
