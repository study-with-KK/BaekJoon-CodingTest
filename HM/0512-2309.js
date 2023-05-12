// 일곱 난쟁이

const smallGuys = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split('\n')
	.filter((item) => item !== '')
	.map(Number);

const ORIGIN_SUM = 100;

const sumOfHeights = smallGuys.reduce((prev, curr) => prev + curr, 0);
const differenceWithSum = sumOfHeights - ORIGIN_SUM;

const withoutLiers = [...smallGuys];
let result;

for (let i = 0; i < smallGuys.length - 1; i++) {
	for (let j = i + 1; j < smallGuys.length; j++) {
		if (smallGuys[i] + smallGuys[j] === differenceWithSum) {
			result = withoutLiers.filter(
				(p) => p !== smallGuys[i] && p !== smallGuys[j]
			);
			break;
		}
	}
}

console.log(...result.sort((a, b) => a - b));
