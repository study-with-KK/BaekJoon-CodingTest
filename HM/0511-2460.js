// 지능형 기차
const [...countPeopleArr] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
	.toString()
	.trim()
	.split(/\s/)
	.filter((item) => item !== '')
	.map(Number);

let value = 0;

const getRideArr = [];

countPeopleArr.forEach((item, idx) => {
	if (idx % 2 === 0) {
		value -= item;
	} else {
		value += item;
		getRideArr.push(value);
	}
});

console.log(Math.max(...getRideArr));
