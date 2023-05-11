// 피보나치 수 -> number 타입 실수

// 반복문 활용법
const n = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim();

const resultArr = [];

const generateFibonacci = (n) => {
	for (let i = 0; i <= +n; i++) {
		if (i === 0) {
			resultArr.push(0);
		} else if (i === 1) {
			resultArr.push(1);
		} else {
			resultArr.push(resultArr[i - 2] + resultArr[i - 1]);
		}
	}
	console.log(resultArr.at(-1));
};

generateFibonacci(+n);

// 재귀 활용법
const n = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim();

const generateFibonacci = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 1;

	return generateFibonacci(n - 2) + generateFibonacci(n - 1);
};

console.log(generateFibonacci(+n));
