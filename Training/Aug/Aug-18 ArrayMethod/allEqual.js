function sameValue(element, index, array) {
  return element === array[0];
}

console.log([12, 5, 8, 130, 44].every(sameValue)); // false
console.log([12, 12, 12, 12, 12].every(sameValue)); // true

x = ['1', '2', 3];
x.length = 100;
console.log(x[4]);

const x = {
  lol: 2
}
Object.freeze(
  x
)

console.log(Object.isExtensible(x));
