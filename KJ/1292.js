const [begin, end] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// const [begin, end] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

const array = [];

for (let i = 0; i <= end; i++) {
  for (let j = 0; j < i; j++) {
    array.push(i);
  }
}

console.log(array.filter((_, i) => begin - 1 <= i && i <= end - 1).reduce((accum, curValue) => accum + curValue, 0));
