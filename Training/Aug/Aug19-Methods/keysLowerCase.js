function lowerKeys(obj) {
    return Object.entries(obj).map(([key, value]) => {
      return [key.toLowerCase(), value];
    })
  }

const obj = {
  NAME: 'Timberlynn',
  AGE: 25,
  GENDER: 'Female'
};

console.log(Object.entries(obj))
console.log(lowerKeys(obj)); // 👉️ {name: 'Tom', age: 30}