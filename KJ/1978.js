// const [N, ...input] = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split(/\s/)
//   .filter(v => v !== '')
//   .map(Number);

const [N, ...input] = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(/\s/)
  .filter(v => v !== '')
  .map(Number);

const isPrimeNumber = n => {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

console.log(input.filter(n => isPrimeNumber(n)).length);
