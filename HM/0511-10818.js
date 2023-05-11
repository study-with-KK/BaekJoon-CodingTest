// 최소, 최대

const [n, ...arr] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(/\s/)
	.filter((item) => item !== '')
	.map(Number);

const result = arr.sort((prev, curr) => prev - curr);

console.log(result[0], result[result.length - 1]);
