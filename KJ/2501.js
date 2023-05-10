const fs = require('fs');

// for 백준
// const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const dividers = [];
const input = fs.readFileSync('example.txt').toString().trim().split(' ');
const N = +input[0];
const K = +input[1];

for (let i = 1; i < N; i++) {
  if (N % i === 0) {
    dividers.push(i);
  }
}

console.log(dividers.length < K ? 0 : dividers[K - 1]);
