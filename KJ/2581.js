const [M, N] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// const [M, N] = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

// M ~ N(10,000 이하) 사이의 자연수 중 소수를 모두 찾고 이 소수들의 합과 최솟값을 찾아라.
// 없으면 -1 출력

// 10,000 이하 소수를 모두 찾는다. (에라토스테네스의 체)
// 길이가 10,001이고 모든 인덱스를 true 값으로 갖는 배열을 만든다.
const isPrimeArray = Array.from({ length: 10001 }, () => true).fill(false, 0, 2);

// 2부터 체로 지워간다.
for (let i = 2; i <= 10000; i++) {
  // i번째 수가 소수일 때
  if (isPrimeArray[i] === true) {
    // 배열의 i 배수들을 순회하며 소수가 아니라고 표시한다.
    for (let j = i * i; j <= 10000; j += i) {
      isPrimeArray[j] = false;
    }
  }
}

// 2. M,N 사이의 소수를 필터링
const result = isPrimeArray.map((prime, i) => (prime && M <= i && i <= N ? i : 0)).filter(v => v !== 0);

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((accum, curr) => accum + curr, 0));
  console.log(result.at(0));
}
