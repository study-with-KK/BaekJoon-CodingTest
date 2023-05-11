// const [...heights] = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);

const [...heights] = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

// 9개의 데이터에서 7개만 필요한 상황.
// 9C7 = 9C2 = 36가지 경우를 brutal force로 계산해보면 될 듯.

// 1. 모든 키의 합을 구한다.
const sum = heights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let result = [];

// 2. sum - 100 = '두 키의 합'을 36가지 경우에서 찾아낸다.
for (let i = 0; i < heights.length - 1; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (heights[i] + heights[j] === sum - 100) {
      result = heights.filter(height => height !== heights[i] && height !== heights[j]);
    }
  }
}

console.log(...result.sort((a, b) => a - b));
