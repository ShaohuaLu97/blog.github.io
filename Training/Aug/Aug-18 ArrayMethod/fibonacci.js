const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (preV, curV, curi) => preV.concat(curi > 1 ? preV[curi - 1] + preV[curi - 2] : curi), []
  );

console.log(fibonacci(10));