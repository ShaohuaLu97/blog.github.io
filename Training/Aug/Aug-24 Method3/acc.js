let array = [1, 2, 3, 4, 5];
array = array.map((elem, index) => array.slice(0,index + 1).reduce((a, b) => a + b));
console.log(array);