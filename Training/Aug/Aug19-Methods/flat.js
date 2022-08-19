const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr2.flat(Infinity));