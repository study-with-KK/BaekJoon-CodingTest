const N = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
);

// const N = Number(require('fs').readFileSync('example.txt').toString().trim());

const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(N));
