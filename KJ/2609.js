const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

input.sort((a, b) => a - b);

const getGCD = (a, b) => {
  for (let i = a; i > 1; --i) {
    if (b % i === 0 && a % i === 0) {
      return i;
    }
  }

  return 1;
};

const gcd = getGCD(input[0], input[1]);

const getLCM = (a, b) => (((gcd * a) / gcd) * b) / gcd;

console.log(gcd);
console.log(getLCM(input[0], input[1]));
