// 이진수
const [T, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(/\s/)
  .filter((item) => item !== "")
  .map(Number);

const makeBinaryNumber = (number) => {
  const binaryStr = number.toString(2);
  const reversedNumberTypeBinaryArr = [...binaryStr]
    .map((item) => +item)
    .reverse();

  const result = [];

  reversedNumberTypeBinaryArr.forEach((item, idx) => {
    if (item === 1) result.push(idx);
  });

  console.log(result.join(" "));
};

for (let i = 0; i < T; i++) {
  makeBinaryNumber(arr[i]);
}
