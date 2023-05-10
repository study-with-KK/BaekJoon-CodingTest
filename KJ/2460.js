// const [...arr] = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split(/\s/);

const [...arr] = require('fs').readFileSync('example.txt').toString().trim().split(/\s/);

const numbers = arr.filter(number => number !== '').map(number => +number);

let count = 0;
const result = [];

for (let i = 1; i < numbers.length - 1; i++) {
  count += numbers[i] * (-1) ** (i + 1);

  result.push(count);
}

result.sort((a, b) => a - b);

console.log(result.at(-1));
