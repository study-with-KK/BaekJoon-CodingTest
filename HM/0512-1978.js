// 소수 찾기
const [n, ...arr] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(/\s/)
	.map(Number);

let primeNumCount = 0;

// O(N2) 이중 반복문
arr.forEach((num) => {
	let tempArr = [];

	if (num === 1) return;
	for (let i = 2; i <= num; i++) {
		num % i === 0 && tempArr.push(i);
	}

	primeNumCount += tempArr.length === 1 ? 1 : 0;
});

console.log(primeNumCount);

// O(N)
/**
 * 소수 (PrimeNum) : 자기 자신과 1만을 약수로 갖는 경우
 * -> 1은 소수가 아님
 * -> 2, 3, 5, 7 ...
 *
 * -> 짝수일 경우 나누었을 때 나머지가 0이므로 소수에 해당하지 않음
 * -> 홀수인 경우 자기 자신을 제외하고 나누었을 때 나머지가 0인 경우는 소수에 해당하지 않음
 */
const checkNumIsPrime = (n) => {
	if (n === 1) return false;
	if (n === 2) return true;

	if (n % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}

	return true;
};

console.log(arr.filter((num) => checkNumIsPrime(num)).length);
