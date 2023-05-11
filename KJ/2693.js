const [N, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(/\s/)
  .filter(v => v !== '')
  .map(Number);

// const [N, ...input] = require('fs')
//   .readFileSync('example.txt')
//   .toString()
//   .trim()
//   .split(/\s/)
//   .filter(v => v !== '')
//   .map(Number);

const testCases = [];

for (let i = 0; i < N; i++) {
  testCases.push(input.slice(i * 10, (i + 1) * 10).sort((a, b) => b - a));
}

testCases.forEach(testCase => {
  console.log(...testCase.filter((_, i) => i === 2));
});
