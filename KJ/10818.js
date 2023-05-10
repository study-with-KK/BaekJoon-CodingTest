const [N, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(/\s/);

const numbers = arr.filter(number => number !== '').map(number => +number);

numbers.sort((a, b) => a - b);

console.log(numbers.at(0) + ' ' + numbers.at(-1));
