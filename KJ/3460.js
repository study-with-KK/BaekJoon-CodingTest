// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n');

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const toBinaryNumber = number => {
  const binNumber = [];
  let temp = number;
  let result = '';

  while (temp > 0) {
    if (temp % 2 === 0) {
      binNumber.push(0);
    } else {
      binNumber.push(1);
    }

    temp = Math.floor(temp / 2);
  }

  for (let i = 0; i < binNumber.length; i++) {
    if (binNumber[i] === 1) {
      result += i + ' ';
    }
  }

  console.log(result);
};

for (let i = 1; i <= +input[0]; i++) {
  toBinaryNumber(+input[i]);
}
