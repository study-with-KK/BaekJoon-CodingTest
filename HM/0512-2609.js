// 최대 공약수와 최소 공배수

const input = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

// a > b라는 가정
const arr = input.sort((a, b) => (a > b ? b - a : a - b));

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
const getLCM = (a, b) => (a * b) / getGCD(a, b);

console.log(...[getGCD(...arr), getLCM(...arr)]);
