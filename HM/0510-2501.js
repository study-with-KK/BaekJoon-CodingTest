// 2501 약수 구하기
const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ");

const divisors = [];

const N = +input[0];
const K = +input[1];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) divisors.push(i);
}

console.log(divisors.length < K ? 0 : divisors[K - 1]);
