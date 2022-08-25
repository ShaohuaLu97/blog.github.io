var x = [1, 4, 3, 2, 3, 6, 7, 8, 8],
    y = [0, 2, 1, 2, 3]

var result = x.map(function(item, index) {
  return item - y[index];
})

console.log(result);

result = result.filter(function(val) {
  return val !== 0 && !Number.isNaN(val);
});

console.log(result);