// 소수

const [M, N] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const isPrimeNumber = (n) => {
	if (n === 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}

	return true;
};

const primeNumArr = [];

for (let num = M; num <= N; num++) {
	isPrimeNumber(num) && primeNumArr.push(num);
}

const hasPrimeNumResult = [
	primeNumArr.reduce((prev, curr) => prev + curr, 0),
	primeNumArr[0],
];

console.log(primeNumArr.length === 0 ? -1 : hasPrimeNumResult.join(' '));
