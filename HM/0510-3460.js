// 이진수
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input[0];
const n = +input[1];

const makeBinaryNumber = (number) => {
  const binaryStr = n.toString(2);
  const reversedNumberTypeBinaryArr = [...binaryStr]
    .map((item) => +item)
    .reverse();

  const result = [];

  reversedNumberTypeBinaryArr.forEach((item, idx) => {
    if (item === 1) result.push(idx);
  });

  console.log(result.join(" "));
};

for (let i = 1; i <= T; i++) {
  makeBinaryNumber(i);
}
